import React from "react";
import {Link} from "react-router-dom"

const Routing = () =>{
    return (
        <>
        <li><Link to="/">Form</Link></li>
        <li><Link to="/dropdown">Dropdown</Link></li>
        </>
    )
};

export default Routing;