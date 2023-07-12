import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
} from 'reactstrap';
import { Link, NavLink as RRLink } from 'react-router-dom';
import storeLogo from "../images/logo.png"
import { useSelector } from 'react-redux';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const cart = useSelector(state => state.cart);

    const toggle = () => setIsOpen(!isOpen);

    const navStyle = {
        backgroundColor: "#ffde59",
        border: 0,
    };

    return (
        <Navbar style={navStyle} light expand='md'>
            <NavbarBrand href="/" style={{ color: '#ff3131' }}>
                <img src={storeLogo} alt='logo' height='60' />  <strong>Cook's Corner</strong></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink tag={RRLink} to="/featured-products">Featured Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RRLink} to="/products">All Products</NavLink>
                    </NavItem>
                </Nav>
                <UncontrolledDropdown>
                    <DropdownToggle 
                        caret={cart.length > 0} 
                        color={cart.length > 0 ? 'primary' : 'default'}
                    >
                        My Cart ({cart.length})
                    </DropdownToggle>
                    <DropdownMenu flip>
                        {cart.length > 0 ? (
                            <>
                                {cart.map(c => {
                                    return <DropdownItem key={c.title}>{c.title} - ${c.price}</DropdownItem>
                                })}
                                <DropdownItem tag={Link} to="/my-cart">
                                    View Cart
                                </DropdownItem>
                            </>
                        ) : (
                            <DropdownItem disabled>
                                <span className="text-muted">Empty Cart</span>
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown style={{ marginLeft: '10px' }}>
                    <DropdownToggle color="primary" caret>
                        Admin
                    </DropdownToggle>
                    <DropdownMenu flip>
                        <DropdownItem><Link to="/products/new">List Products</Link></DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Collapse>
        </Navbar>
    );
}

export default Navigation;