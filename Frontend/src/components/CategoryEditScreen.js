import React, { PropTypes } from 'react';
import CategoryEditForm from './CategoryEditForm';
import Menu from './Menu';

import './../components/main.css';

export default class CategoryEditScreen extends React.Component {

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
        <h1 style={{textAlign: 'center'}}>Edit Category</h1>
        <CategoryEditForm />
      </div>
    );
  }
}

CategoryEditScreen.propTypes = {
};
