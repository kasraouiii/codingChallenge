import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { Button } from 'semantic-ui-react';
import Table from './../components/Table';
import Menu from './../components/Menu';
import Actions from '../actions/creators';

import './../components/main.css';

const data = require('./../mockup/db.json');

class Main extends React.Component {

  componentDidMount() {
    // get data
    this.props.requestLast5Categories();
    this.props.requestLast5Products();
    this.props.requestProducts();
    this.props.requestCategories();
  }
  render() {
    const { last5Categories } = this.props;
    const { last5Products } = this.props;
    const last5CategoriesProperties = last5Categories.length > 0 ? Object.getOwnPropertyNames(last5Categories[0]) : [];
    const last5ProductsProperties = last5Products.length > 0 ? Object.getOwnPropertyNames(last5Products[0]) : [];

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
    return (
      <frag>
        <div className="container">
          <Menu menuItems={menuItems} pathname={this.props.pathname}/>
          <h1 style={{textAlign: 'center'}}>Last 5 Categories</h1>
          <Table data={last5Categories} headers={last5CategoriesProperties}/>
          <Link to={{pathname: '/categories'}}><Button floated="right">See all categories</Button></Link>
          <h1 style={{textAlign: 'center'}}>Last 5 Products</h1>
          <Table data={last5Products} headers={last5ProductsProperties}/>
          <Link to={{pathname: '/products'}}><Button floated="right">See all products</Button></Link>
        </div>
      </frag>
    );
  }
}

Main.propTypes = {
  pathname: PropTypes.string.isRequired,

  last5Categories: PropTypes.arrayOf(PropTypes.object),
  requestLast5Categories: PropTypes.func.isRequired,
  requestCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object),

  last5Products: PropTypes.arrayOf(PropTypes.object),
  requestLast5Products: PropTypes.func.isRequired,
  requestProducts: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object),

};

const mapStateToProps = state => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  last5Categories: state.last5Categories.list,
  last5Products: state.last5Products.list,
  categories: state.categories.list
});

const mapDispatchToProps = dispatch => ({
  requestLast5Categories: () => dispatch(Actions.requestLast5Categories()),
  requestLast5Products: () => dispatch(Actions.requestLast5Products()),
  requestProducts: () => dispatch(Actions.requestProducts()),
  requestCategories: () => dispatch(Actions.requestCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

