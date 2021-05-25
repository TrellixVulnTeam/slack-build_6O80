

//import react

import React from "react";


//import the styles.css

import "../searchBox/searchBox.styles.css";


//this is a functional component
//usually we use them when we only need to return some html
//unlike class components - they dont have states, life cycles, etc...

export const SearchBox = ({ placeholder, handleChange}) => (

    <input
    
    className="search"

    type ="search"

    placeholder = {placeholder}

    onChange = {handleChange}
    />

);