import React, {PropTypes} from 'react';
import { Form} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Actions from '../actions/creators';

import './../components/main.css';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.product.id,
      name: this.props.product.name,
      price: this.props.product.price,
      fk_category: this.props.product.fk_category
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateNumber = this.validateNumber.bind(this);
  }

  componentDidMount() {
    // get data
    this.props.requestCategories();
    const id = location.pathname.substring(15, location.pathname.length);
    this.props.requestProduct(id);
  }

  componentWillReceiveProps(nextProps) {
    this.initialize(nextProps);
  }


  initialize(nextProps) {
    const product = nextProps.product;
    this.state = ({
      id: product.id,
      name: product.name,
      price: product.price,
      fk_category: product.fk_category
    });
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


  handleCategoryChange(event) {
    this.setState({fk_category: event.target.value});
  }

  handleSubmit() {
    if (this.state.name === ''|| this.state.price === '' || this.state.fk_category === '') {
      alert('No item can be null!');
    } else if (this.validateNumber(this.state.price) == null) {
      alert('Price MUST be numbers');
    } else {
      const product = this.state;
      const id = this.props.product.id;
      this.props.updateProduct(product, id);
      browserHistory.push('/products');
    }
  }

  render() {
    const options = this.props.categories.map(cat => ({
      key: cat.id,
      value: cat.id,
      text: cat.name
    }));
    if (!this.state.name) return <h3>Loading...</h3>;
    return (
      <Form onSubmit={e => e.preventDefault()} inverted>
        <Form.Field >
          <Form.Input name="name" onChange={this.handleNameChange} value={this.state.name} label="Name" />
          <Form.Input name="price" onChange={this.handlePriceChange} value={this.state.price} label="Price" />
          <Form.Select name="category" placeholder="Select category" value={this.state.fk_category} options={options} onChange={this.handleCategoryChange} />
        </Form.Field>
        <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
      </Form>
    );
  }
}

ProductForm.propTypes = {
  updateProduct: PropTypes.func.isRequired,
  requestCategories: PropTypes.func.isRequired,
  requestProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateProduct: (product, id) => dispatch(Actions.requestUpdateProducts(product, id)),
  requestCategories: () => dispatch(Actions.requestCategories()),
  requestProduct: productId => dispatch(Actions.requestProduct(productId))
});

const mapStateToProps = state => ({
  categories: state.categories.list,
  product: state.product.product
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
