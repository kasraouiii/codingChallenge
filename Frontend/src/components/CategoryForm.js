import React, {PropTypes} from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import Actions from '../actions/creators';

import './../components/main.css';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      name: '',
      description: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      this.props.postCategory(category);
      browserHistory.push('/categories');
    }
  }

  render() {
    return (
      <Form onSubmit={e => e.preventDefault()} inverted>
        <Form.Field >
          <Form.Input name="name" onChange={this.handleNameChange} placeholder="Name" label="Name" />
          <Form.Input name="description" onChange={this.handleDescriptionChange} placeholder="Description" label="Description" />
        </Form.Field>
        <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
      </Form>
    );
  }
}

CategoryForm.propTypes = {
  postCategory: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  postCategory: category => dispatch(Actions.requestAddCategories(category))
});


export default connect(null, mapDispatchToProps)(CategoryForm);
