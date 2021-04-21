import React, { Component } from "react";
import { Container, Row, Col, Collapse, } from "reactstrap";
import items from "./Items";

const Items = items;
const waitTime = 2000;
class TasteFinder extends Component {
    state = {
        page: -1,
        isOpen1: true,
        isOpen2: false,
        items: Items,
        cart: [],
    };
    timer = () => this.setState({ isOpen2: true });
    cardMaker = (n) => {
        if (n.type !== this.state.page) {
            return null;
        }
        return (
            <Col md="4" xs="6" id="item" style={{ padding: "0px 0px 50px 0px" }}>
                <div>
                    <img
                        className={n.open?"itemImage":"itemOutofStock"}
                        onClick={() => {
                            let arr = this.state.items;
                            arr[n.id].quantity-=(n.quantity>0?1:0);
                            if(n.quantity===0){
                                arr[n.id].open = false;
                            }
                            setTimeout(() => {
                                this.setState({ items: arr });
                            }, 0);
                        }}
                        src={n.image}
                        alt="item"
                    />
                    <p>{n.quantity}</p>
                    <div id="smallImageText">
                        <p>{n.name}</p>
                        <hr className="hr-light" />
                    </div>
                </div>
            </Col>
        );
    };

    render() {
        return (
            <Container>
                <Row>
                    <Collapse isOpen={this.state.isOpen1}>
                        <Col sm={{ size: "10", offset: 1 }}>
                            <Row>
                                <Col xs="6" id="taste">
                                    <img
                                        onClick={() => {
                                            setTimeout(() => {
                                                this.setState({ isOpen1: false, page: 0 });
                                            }, 200);
                                            setTimeout(() => {
                                                this.timer();
                                            }, waitTime);
                                        }}
                                        id="tasteImage"
                                        src="https://celebratingsweets.com/wp-content/uploads/2018/06/Strawberry-Shortcake-Cake-1-1.jpg"
                                        alt="cake"
                                    />
                                    <p
                                        onClick={() => {
                                            setTimeout(() => {
                                                this.setState({ isOpen1: false, page: 0 });
                                            }, 200);
                                            setTimeout(() => {
                                                this.timer();
                                            }, waitTime);
                                        }}
                                    >
                                        Sweet
                                    </p>
                                </Col>
                                <Col xs="6" id="taste">
                                    <img
                                        onClick={() => {
                                            setTimeout(() => {
                                                this.setState({ isOpen1: false, page: 1 });
                                            }, 200);
                                            setTimeout(() => {
                                                this.timer();
                                            }, waitTime);
                                        }}
                                        id="tasteImage"
                                        src="https://www.frei-style.com/wp-content/uploads/2020/06/5G4A2516-1024x1024.jpg"
                                        alt="food"
                                    />
                                    <p
                                        onClick={() => {
                                            setTimeout(() => {
                                                this.setState({ isOpen1: false, page: 0 });
                                            }, 200);
                                            setTimeout(() => {
                                                this.timer();
                                            }, waitTime);
                                        }}
                                    >
                                        Savory
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Collapse>
                </Row>

                <Collapse isOpen={!this.state.isOpen1 && !this.state.isOpen2}>
                    <Col id="loading">
                        <img
                            src="https://i.imgur.com/aJtAwMx.png"
                            className="App-logo"
                            alt="logo"
                        />
                    </Col>
                </Collapse>
                <Collapse isOpen={this.state.isOpen2}>
                    <Container>
                        <Row>
                            <Col sm="4" xs="0" className="sideItems"></Col>
                            <Col sm="7" xs="12">
                                <Row className="items">
                                    {this.state.items.map((n) => this.cardMaker(n))}
                                </Row>
                            </Col>
                            <Col sm="1" xs="0" className="sideItems"></Col>
                        </Row>
                    </Container>
                </Collapse>
            </Container>
        );
    }
}

export default TasteFinder;
