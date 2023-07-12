import React, { useEffect } from 'react';
import { Spinner, Card, CardHeader, CardBody, Table, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from '../redux/Selectors';
import { deleteProduct, addToCart, getProducts } from '../redux/Actions';

function ProductsList({ admin }) {
  // select the productsList from the store
  const inventory = useSelector(selectProducts);

  const dispatch = useDispatch();

  // dispatch getProducts in this component somewhere
  // I want to fetch my products only when this component renders for the FIRST time
  useEffect(function() {
    dispatch(getProducts());
  }, []);
  
  const handleDelete = (productTitle) => (event) => {
    console.log('Deleting product', productTitle);
    
    dispatch(deleteProduct(productTitle));
  }

  const handleAddCart = (product) => event => {
    dispatch(addToCart(product));
  }

  if (!inventory.length) {
    return <Spinner />
  }

  return (
    <Card>
      <CardHeader tag="h2" className="text-center">Browse our Inventory</CardHeader>
      <CardBody>
        <Table striped>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Featured</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(inventory => {
              return <tr key={inventory.title}>
                <td><img src={inventory.image} height='60' /></td>
                <td>{inventory.title}</td>
                <td>{inventory.featured ? 'Yes' : 'No'}</td>
                {admin && <td><Button color="danger" size="sm" onClick={handleDelete(inventory.title)}>Delete</Button></td>}
                {!admin && <td><Button color="success" size="sm" onClick={handleAddCart(inventory)}>Add to Cart</Button></td>}
              </tr>
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
};

export default ProductsList;