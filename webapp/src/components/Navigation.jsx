import React, { Component } from "react";
import { Navbar, NavbarBrand, Container, Button, NavItem, Nav } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Navigation extends Component {
    state = {
        admin: false,
    };
    render() {
        return (
            <Container>
                <Navbar>
                    <NavbarBrand id="header">Cool bakery</NavbarBrand>
                    <Nav className="mr-right" navbar>
                        <NavItem>
                            <Button
                                color="link"
                                id="link"
                                onClick={() => {
                                    this.setState({ admin: true });
                                }}
                            >
                                Dashboard
                            </Button>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Container>
        );
    }
}
export default Navigation;
