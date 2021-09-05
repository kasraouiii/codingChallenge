import React, {PropTypes} from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Actions from '../actions/creators';

import './../components/main.css';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      fk_category: '',
      currency:'',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateNumber = this.validateNumber.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);

  }

  componentDidMount() {
    // get data
    this.props.requestCategories();
  }

  validateNumber(value) {
    const regex = '^([1-9][0-9]*|0)$';
    return String(value).match(regex);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handlePriceChange(event) {
    this.setState({price: event.target.value});
  }

  handleCategoryChange(event, props) {
    this.setState({fk_category: props.value});
  }
  handleCurrencyChange(event,props){
    this.setState({currency: props.value});
  }


  handleSubmit() {
    if (this.state.name === '' || this.state.price === '' || this.state.fk_category === '') {
      alert('No item can be null!');
    } else if (this.validateNumber(this.state.price) == null) {
      alert('Price MUST be number');
    } else {
      const product = this.state;
      this.props.postProduct(product);
      browserHistory.push('/products');
    }
  }

  render() {
    const options = this.props.categories.map(cat => ({
      key: cat.id,
      value: cat.id,
      text: cat.name
    }));
    const currencies=[{key:"EUR",value:"EUR",text:"EUR"},{key:"USD",value:"USD",text:"USD"},{key:"MAD",value:"MAD",text:"MAD"},{key:"GBP",value:"GBP",text:"GBP"}];

    return (
      <Form onSubmit={e => e.preventDefault()} inverted>
        <Form.Field >
          <Form.Input name="name" onChange={this.handleNameChange} placeholder="Name" label="Name" />
          <Form.Input name="price" onChange={this.handlePriceChange} placeholder="Price" label="Price" />
          <Form.Select name="currency" placeholder="Select Currency" value={this.state.currency} options={currencies} onChange={this.handleCurrencyChange} />
          <Form.Select name="category" placeholder="Select category" value={this.state.fk_category} options={options} onChange={this.handleCategoryChange} />
        </Form.Field>
        <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
      </Form>
    );
  }
}

ProductForm.propTypes = {
  postProduct: PropTypes.func.isRequired,
  requestCategories: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  postProduct: product => dispatch(Actions.requestAddProducts(product)),
  requestCategories: () => dispatch(Actions.requestCategories())
});

const mapStateToProps = state => ({
  categories: state.categories.list
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
