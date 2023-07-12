import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody, CardHeader, CardFooter, Row, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

//todo: fix carousel arrow color, organize MyCart like Feat Products except vertical
//todo: add cart icon next to View Cart, add remove option on MyCart


function MyCart() {
    // const navigate = useNavigate();

    const cart = useSelector(state => state.cart);

    return (
        <div>
            <h1>My Cart</h1>
            {cart.map((product) => (
                <Card key={product.id} className="mb-3">
                    <CardHeader>{product.title}</CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs={6} md={4}>
                                <img src={product.image} alt={product.title} className="img-fluid" />
                            </Col>
                            <Col xs={6} md={8}>
                                <p>Price: ${product.price}</p>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardFooter>
{/* todo: on CardFooter of MyCart, add Remove All Items option, add routing */}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};


export default MyCart;