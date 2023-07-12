import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Container } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation';
import store from './redux/Store';

const MyStore = store;

const root = ReactDOM.createRoot(document.getElementById('main-app'));
root.render(
    <Provider store={MyStore}>
        <BrowserRouter>
            <Navigation />
            <Container className="mt-3">
                <Routes />
            </Container>
        </BrowserRouter>
    </Provider>
); // App();