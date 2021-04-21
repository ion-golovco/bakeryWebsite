import "./App.css";
import React from "react";
import { Container, Col, Row } from "reactstrap";

import Navigation from "./components/Navigation";
import TasteFinder from "./components/TasteFinder"

function App() {
    
    return (
        <div className="App">
            <Navigation />
            <TasteFinder />
            
            <div id="shopTop" alt=""/>
               
        </div>
    );
}
export default App;
