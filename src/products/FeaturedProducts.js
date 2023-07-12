import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Row, Col, FormGroup, Input, Label, Button } from 'reactstrap';
import { PRODUCT_INVENTORY } from './Inventory';
import { useNavigate } from 'react-router-dom';

/*
  Props vs. State = Ways to manage data in your components

  Props:
    - Passed data from another component
    - Read-only data, an object of information
    - Data is passed as attributes to the tag that's being rendered.
      And the rendered component receives that data as an argument to the function

  State:
    - Initial state to start with
    - Writeable data
    - Local to the component where its being used only
    - Immutable

*/
// function FeaturedProducts({ showImages, showTitle, numProducts }) {

/*
  React injects the JSX into our DOM at the point of render (i.e. FeaturedProducts() )
  Each time state changes, React is re-rendering our component -- aka Calling the function again

  - FeaturedProducts();
  - FeaturedProducts();
  - FeaturedProducts();
  - FeaturedProducts();
  - FeaturedProducts();


  **Virtual DOM processes handles HOW to update the JSX
*/

const featuredInventory = PRODUCT_INVENTORY.filter(item => item.featured);

function FeaturedProducts() {
    const navigate = useNavigate(); // returns a function to navigate the app

    // useState returns an array with 2 elements: [ data, function to set the data ]
    const [numProducts, setNumProducts] = useState(3); // any arguments will be the default state of that data
    const [productsList, setProductsList] = useState(featuredInventory);

    // const { numProducts, showTitle, showImages } = props;
    /*
      props = { numProducts: 4, showTitle: false, showImage: true };
      CANNOT change it: props.numProducts = 10;
    */


    const changeFeaturedProducts = (event) => {
        let value = parseInt(event.target.value);

        // Update the state that holds numProducts
        setNumProducts(value);

        // Update the products list
        setProductsList(function () {
            let resultingProducts = featuredInventory.slice(0, value);
            return resultingProducts;
        });
    }

    const displayProducts = () => {
        if (!productsList.length) return <h4 className="text-center">No Featured Products Today</h4>
        return productsList.map(function (product) {
            return <Col className="text-center" key={product.title}>
                <Card style={{ minHeight: '240px' }}>
                    <CardHeader tag="h3">{product.title}</CardHeader>
                    <CardBody className="d-flex" style={{ alignItems: 'center' }}>
                        <img className="m-auto" src={product.image} alt="product" width="100" />
                    </CardBody>
                </Card>
            </Col>
        })
    }

    console.log("num products", numProducts, typeof numProducts);

    return <Card>
        <CardHeader tag="h2" className="text-center">
            Featured Products
        </CardHeader>
        <CardBody>
            {numProducts > 0 && <p className="fst-italic text-center">Showing the top {numProducts} featured products</p>}
            <Row>
                {displayProducts()}
            </Row>
        </CardBody>
        <CardFooter>
            <Row>
                <Col>
                    <FormGroup>
                        <Label>Num of Featured Products to Display:</Label>
                        <Input type='number' max={4} min={0} onKeyUp={changeFeaturedProducts} />
                    </FormGroup>
                </Col>
                <Col className="text-end">
                    <Button color="success" onClick={() => navigate(-1)}>Go Back</Button>
                </Col>
            </Row>
        </CardFooter>
    </Card>;

};

export default FeaturedProducts;