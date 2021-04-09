import React, { Component } from "react";
import { Container, Row, Col, Collapse, Card } from "reactstrap";
import items from "./Items";

const Items = items;
const waitTime = 2000;
class TasteFinder extends Component {
    state = {
        page: -1,
        isOpen1: true,
        isOpen2: false,
    };
    timer = () => this.setState({ isOpen2: true });
    cardMaker = (n) => {
        if (n.type !== this.state.page) {
            return null;
        }
        return <Container>{n.name}</Container>;
    };
    render() {
        return (
            <Container >
                <Row>
                    <Collapse isOpen={this.state.isOpen1}>
                        <Col sm={{ size: "10", offset: 1 }}>
                            <Row>
                                <Col xs="6" id="taste">
                                    <img
                                        onClick={() => {
                                            setTimeout(() => {this.setState({ isOpen1: false, page: 0 });},200);
                                            setTimeout(() => {
                                                this.timer();
                                            }, waitTime);
                                        }}
                                        id="tasteImage"
                                        src="https://celebratingsweets.com/wp-content/uploads/2018/06/Strawberry-Shortcake-Cake-1-1.jpg"
                                        alt="cake"
                                    />
                                    <p>Sweet</p>
                                </Col>
                                <Col xs="6" id="taste">
                                    <img
                                        onClick={() => {
                                            setTimeout(() => {this.setState({ isOpen1: false, page: 1 });},200);
                                            setTimeout(() => {
                                                this.timer();
                                            }, waitTime);
                                        }}
                                        id="tasteImage2"
                                        src="https://www.frei-style.com/wp-content/uploads/2020/06/5G4A2516-1024x1024.jpg"
                                        alt="food"
                                    />
                                    <p>Savory</p>
                                </Col>
                            </Row>
                        </Col>
                    </Collapse>
                </Row>
                <Row>
                    <Collapse isOpen={!this.state.isOpen1 && !this.state.isOpen2}>
                        <Col sm="12">
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
                            <Col xs='12'>
                                <Container className="items">{Items.map((n) => this.cardMaker(n))}</Container>
                            </Col>
                        </Row>
                        </Container>
                    </Collapse>
                </Row>
            </Container>
        );
    }
}

export default TasteFinder;
