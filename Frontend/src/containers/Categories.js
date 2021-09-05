import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'semantic-ui-react';
import {Link} from 'react-router';
import Table from '../components/Table';
import Menu from '../components/Menu';
import Actions from '../actions/creators';

import './../components/main.css';


class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // get data
    this.props.requestCategories();
  }

  handleChange(event) {
    this.setState({searchString: event.target.value});
  }

  render() {
    const { searchString } = this.state;
    const { categories } = this.props;
    const categoryProperties = categories.length > 0 ? Object.getOwnPropertyNames(categories[0]) : [];
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
    const categoriesFiltered = categories.filter(cat => cat.name.toLowerCase().indexOf(searchString) > -1);
    console.log("props : ",this.props);
    return (
      <div className="container">
        <Menu menuItems={menuItems} pathname={this.props.pathname}/>
        <h1 style={{textAlign: 'center'}}>Categories</h1>
        <Link to={{pathname: '/categories/addCategory'}}><Button floated="left">ADD</Button></Link>
        <Input onChange={this.handleChange} focus placeholder="Search..." />
        {categoriesFiltered.length !== 0 ? <Table data={categoriesFiltered} headers={categoryProperties}/> : <h3>There is no category to display.</h3> }
      </div>
    );
  }
}

Categories.propTypes = {
  pathname: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  requestCategories: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  categories: state.categories.list,
});

const mapDispatchToProps = dispatch => ({
  requestCategories: () => dispatch(Actions.requestCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

