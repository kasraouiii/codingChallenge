import React, { PropTypes } from 'react';
import { Button, Input,Select } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import Table from './../components/Table';
import Menu from './../components/Menu';
import Actions from '../actions/creators';


import './../components/main.css';


class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      currency:'',
      fixedPrices:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    
    
  }

  componentDidMount() {
    // get data
    this.props.requestProducts();
    this.props.requestExchange("USD","EUR");
    const prices=[];
    this.props.products.map(product=>{
      prices[product.id]=product.price;
    });
    this.setState({fixedPrices:prices});
  }

  handleChange(event) {
    this.setState({searchString: event.target.value});
  }

  handleCurrencyChange(event,props){
    console.log("staaate : ",this.state);
    this.props.requestExchange(props.value);
    this.setState({currency: props.value});
  }

  render() {
    const options=[{key:"EUR",value:"EUR",text:"EUR"},{key:"USD",value:"USD",text:"USD"},{key:"MAD",value:"MAD",text:"MAD"},{key:"GBP",value:"GBP",text:"GBP"}];
    const { searchString } = this.state;
    const { products,rates } = this.props;
    const productProperties = products.length > 0 ? Object.getOwnPropertyNames(products[0]) : [];
    const menuItems = [
      {
        name: 'Dashboard',
        pathname: '/',
      },
      {
        name: 'Products',
        pathname: '/products',
      },
      {
        name: 'Categories',
        pathname: '/categories',
      }
    ];
    console.log("products : ",products);

    const productsFiltered = products.filter(prod => prod.name.toLowerCase().indexOf(searchString) > -1);
    let prods=[]
    productsFiltered.map((product)=>{
        console.log("product : ",product);
        let prod=product;
        console.log("fixedPrices : ",this.state.fixedPrices);
        if(this.state.fixedPrices.length==0){
          console.log("lengthhh");
          prod.price=product.price;
        }
        else{
          console.log("fixed product.price",this.state.fixedPrices[product.id]);
          console.log("rate[this.state.currency]",rates[this.state.currency]);
          console.log("multiply : ",this.state.fixedPrices[product.id]*rates[this.state.currency]);
          prod.price= rates[this.state.currency] ===undefined ? this.state.fixedPrices : this.state.fixedPrices[product.id]*rates[this.state.currency];  
        }
         prods.push(prod);
    })
    console.log("prods : ",prods);
    console.log("rates : ",rates);
    console.log("prooops : ",this.props);

    return (
      <div className="container">
        <Menu menuItems={menuItems} pathname={this.props.pathname}/>
        <h1 style={{textAlign: 'center'}}>Products</h1>
        <Link to={{pathname: '/products/addProduct'}}><Button floated="left">ADD</Button></Link>
        <Input onChange={this.handleChange} focus placeholder="Search..." />
        <Select name="currency" placeholder="Select Currency" value={this.state.currency} options={options} onChange={this.handleCurrencyChange} />
        {productsFiltered.length !== 0 ? <Table data={productsFiltered} headers={productProperties}/> : <h3>There is no product to display.</h3> }
      </div>
    );
  }
}

Products.propTypes = {
  pathname: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  requestProducts: PropTypes.func.isRequired,
  requestExchange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  products: state.products.list,
  rates: state.currencyExchange.currencyExchange
});

const mapDispatchToProps = dispatch => ({
  requestProducts: () => dispatch(Actions.requestProducts()),
  requestCategories: () => dispatch(Actions.requestCategories()),
  requestExchange: (currencyFrom,currencyTo) => dispatch(Actions.requestExchange(currencyFrom,currencyTo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
