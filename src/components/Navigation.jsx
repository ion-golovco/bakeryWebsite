import React, { Component } from "react";
import { Navbar, Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Navigation extends Component {
    state = {
        admin: false,
    };
    render() {
        return (
            <Container id="navContainer">
                <Navbar>
                    <a color="link"
                        id="link"
                        onClick={() => {
                            this.setState({ admin: true });
                        }}
                        href='/'
                    >
                        Dashboard
                    </a>
                </Navbar>
            </Container>
        );
    }
}
export default Navigation;
