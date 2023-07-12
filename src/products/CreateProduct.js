import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Alert, CardFooter, Form, FormGroup, Input, Label, Button, FormFeedback } from 'reactstrap';
import ProductsList from './ProductsList';
// import { PRODUCT_INVENTORY } from './Inventory';
import { useDispatch } from 'react-redux';
import { saveProduct } from '../redux/Actions';
/*
  Controlled vs. Uncontrolled forms

  Controlled:
    - Managing state for all the input fields
    - Because we have access to the data as user enters it, we can now do extra stuff (i.e. validation)

  Uncontrolled:
    - Letting the browser naturally handle forms without the use of State.
      Think about how browsers know about your data in standard HTML <form> tags.
    - We only have access to the data when the user is finished with the input field, and taken focus off of it
    - The way to use this feature in React is to use another hook called useRef()
*/

/*
  Component's lifecycle:
    - Mounting = When the component loads for the first time onto the DOM
    - Receiving props
    - Re-renders of the component (i.e. state updates)
    - Unmounting = Terminal state (removed the DOM)

  useEffect hooks: Allows us to hook into the component's lifecycle events and trigger our own
    "side effect" function

    - Takes two arguments:
      1st arg: Callback function (side effect function)
      2nd arg: Dependencies (the events or data that you're listening for)
        - [] = When component first renders
        - [data1, data2, data3, data4] = Anytime one of the listed data changes
        - null = Every single render
        
        const STARTING_TIMER = 60;
*/

const defaultFormFields = {
    title: '',
    image: '',
    featured: false,
    price: 0
};

function CreateProduct() {
    const [productData, setProductData] = useState(defaultFormFields); // { title: 'Some Title', image: '' ... }
    const [validations, setValidations] = useState({});
    const [submit, setSubmit] = useState(false);
    // const [productList, setProductList] = useState(PRODUCT_INVENTORY);

    const dispatch = useDispatch();

    useEffect(function () {
        // run your side effect code here

        /* Options for side effects
          1. Present some autocomplete options based on title (search feature)
          2. Validation against data
        */

        // Title must be at least 5 alphanumeric characters and at most 20.
        let titleRegex = /^[a-zA-Z0-9]{5,20}$/;

        // Validate user input
        if (titleRegex.test(productData.title)) {
            // if title is valid
            setValidations(prevValidations => ({ ...prevValidations, title: { valid: true } }));
        } else {
            setValidations(prevValidations => ({ ...prevValidations, title: { invalid: true } }));
        }
    }, [productData.title]); // anytime title changes

    // useEffect to reset the form
    useEffect(() => {
        if (submit) setProductData(defaultFormFields);
    }, [submit]);

    let imageRegex = /(.png|.jpeg)$/;

    const setData = (event) => {
        let name = event.target.name;
        let value = event.target.value;


        if (name === 'image' && !imageRegex.test(value)) {
            setValidations((prevValidations) => ({ ...prevValidations, image: { invalid: true } }));
        } else {
            setValidations((prevValidations) => ({ ...prevValidations, image: { valid: true } }));
        }
        // Set productData with name/value
        setProductData(function (prevProductData) {
            return { ...prevProductData, [name]: value }
        });
    }

    const handleSave = (event) => {
        dispatch(saveProduct(productData)); // Use local state productData that holds the form fields
        setSubmit(true);
    }

    // const addProductToList = () => {
    //     setProductList((prevProductList) => [...prevProductList, productData]);
    //     setProductData(defaultFormFields);
    // }

    let formValid = true;

    for (let field in validations) {
        if (validations[field].invalid) {
            formValid = false;
            break;
        }
    }

    return (
        <>
            <Card>
                <CardHeader tag="h3">Create New Product</CardHeader>
                <CardBody>
                    {!formValid && <Alert color="danger">There are errors on your form</Alert>}
                    <Form>
                        <FormGroup>
                            <Label>Product Title</Label>
                            <Input {...validations.title} value={productData.title} onChange={setData} name="title" />
                            <FormFeedback>Title is invalid</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label>Product Image</Label>
                            <Input {...validations.image} value={productData.image} name="image" onChange={setData} />
                        </FormGroup>
                        <FormGroup switch>
                            <Label>Featured?</Label>
                            <Input type="switch" checked={productData.featured} name="featured" onChange={setData} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Price</Label>
                            <Input value={productData.price} name="price" type="number" onChange={setData} />
                        </FormGroup>
                    </Form>
                </CardBody>

                <CardFooter>
                    <Button color="success" disabled={!formValid} onClick={handleSave}>Create</Button>
                </CardFooter>
            </Card>
            <br />
            <Card>
                <CardHeader className="p-3">Inventory</CardHeader>
                <CardBody>
                    <ProductsList admin />
                </CardBody>
            </Card>
        </>
    );
};

export default CreateProduct;