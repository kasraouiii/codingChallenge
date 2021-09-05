import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Main from './containers/Main';
import Categories from './containers/Categories';
import Products from './containers/Products';
import CategoryAddScreen from './components/CategoryAddScreen';
import ProductAddScreen from './components/ProductAddScreen';
import configureStore from './stores';
import CategoryEditScreen from './components/CategoryEditScreen';
import ProductEditScreen from './components/ProductEditScreen';
import Table from './components/Table';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Main} />
        <Route path="/products" component={Products} />
        <Route path="/categories" component={Categories} />
        <Route path="/categories/addCategory" name="AddCategory" component={CategoryAddScreen} />
        <Route path="/products/addProduct" name="AddProduct" component={ProductAddScreen} />
        <Route path="/categories/edit/:categoryId" name="EditCategory" component={CategoryEditScreen} />
        <Route path="/products/edit/:productId" name="EditProduct" component={ProductEditScreen} />
        <Route path="/categories/:categoryId" name="DeleteCat" component={CategoryEditScreen} />
        <Route path="/products/:productId" name="DeleteProd" component={CategoryEditScreen} />
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);
