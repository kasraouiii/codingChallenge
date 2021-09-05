import React, {PropTypes} from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Actions from '../actions/creators';

import './../components/main.css';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.category.id,
      name: this.props.category.name,
      description: this.props.category.description,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // get data
    const id = location.pathname.substring(16, location.pathname.length);
    this.props.requestCategory(id);
  }

  componentWillReceiveProps(nextProps) {
    this.initialize(nextProps);
  }

  initialize(nextProps) {
    const category = nextProps.category;
    this.state = {
      id: category.id,
      name: category.name,
      description: category.description
    };
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit() {
    if (this.state.name === '' || this.state.description === '') {
      alert('Name or Description cannot be null!');
    } else {
      const category = this.state;
      const id = location.pathname.substring(16, location.pathname.length);
      this.props.updateCategory(category, id);
      browserHistory.push('/categories');
    }
  }

  render() {
    if (!this.state.name) return <h3>Loading...</h3>;
    return (
      <Form onSubmit={e => e.preventDefault()} inverted>
        <Form.Field >
          <Form.Input name="name" onChange={this.handleNameChange} value={this.state.name} label="Name" />
          <Form.Input name="description" onChange={this.handleDescriptionChange} value={this.state.description} label="Description" />
        </Form.Field>
        <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
      </Form>
    );
  }
}

CategoryForm.propTypes = {
  updateCategory: PropTypes.func.isRequired,
  requestCategory: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateCategory: (category, id) => dispatch(Actions.requestUpdateCategories(category, id)),
  requestCategory: categoryId => dispatch(Actions.requestCategory(categoryId)),
});

const mapStateToProps = state => ({
  category: state.category.category
});


export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
