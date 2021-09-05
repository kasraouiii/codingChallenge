import React, { PropTypes } from 'react';
import CategoryForm from './CategoryForm';
import Menu from './Menu';

import './../components/main.css';

export default class CategoryAddScreen extends React.Component {

  render() {
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
      <div className="container">
        <Menu menuItems={menuItems} pathname={this.props.pathname}/>
        <h1 style={{textAlign: 'center'}}>Add Category</h1>
        <CategoryForm />
      </div>
    );
  }
}

CategoryAddScreen.propTypes = {
};
