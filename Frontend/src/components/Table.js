import React, { PropTypes } from 'react';
import { Table, Button, Header, Icon, Modal } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Actions from '../actions/creators';

class TableComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(entry) {
    const { deleteCategory, deleteProduct } = this.props;
    if (entry.description) {
      if (confirm('Are you sure you want to delete this category?')) {
        deleteCategory(entry.id);
      }
    } else if (confirm('Are you sure you want to delete this product?')) {
      deleteProduct(entry.id);
    }
  }

  handleEdit(entry) {
    if (entry.description) {
      browserHistory.push(`/categories/edit/${entry.id}`);
    } else {
      browserHistory.push(`/products/edit/${entry.id}`);
    }
  }


  render() {
    const { data, headers } = this.props;
    headers[headers.length] = 'Options';
    const tableHeaders = headers.map((header, indexHeader) => {
      let newHeader = header;
      if (newHeader === 'fk_category') {
        newHeader = 'category';
      }
      return (<Table.HeaderCell key={indexHeader}>{newHeader.toUpperCase()}</Table.HeaderCell>);
    });
    const tableBody = data.map((row, indexRow) => (
      <Table.Row key={indexRow}>
        {
           headers.map((header, indexHeader) => (
             <Table.Cell key={indexHeader}>
               {header === 'id' && indexRow + 1}
               {(header !== 'Options' && header !== 'id' && header !== 'fk_category') && row[header]}
               {header === 'fk_category' &&
               this.props.categories.find(cat => cat.id === row.fk_category) &&
               this.props.categories.find(cat => cat.id === row.fk_category).name
               }
               {header === 'Options' &&
               <Button.Group>
                 <Button onClick={() => this.handleEdit(row)}>Edit</Button>
                 <Button.Or />
                 <Button negative onClick={() => this.handleDelete(row)}>Delete</Button>
               </Button.Group>
               }
             </Table.Cell>
           ))
        }
      </Table.Row>
    ));
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            {tableHeaders}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableBody}
        </Table.Body>
      </Table>
    );
  }
}

TableComponent.defaultProps = {
};

TableComponent.propTypes = {
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,

};

const mapDispatchToProps = dispatch => ({
  deleteCategory: categoryId => dispatch(Actions.requestDeleteCategories(categoryId)),
  deleteProduct: productId => dispatch(Actions.requestDeleteProducts(productId)),
});

const mapStateToProps = state => ({
  categories: state.categories.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
