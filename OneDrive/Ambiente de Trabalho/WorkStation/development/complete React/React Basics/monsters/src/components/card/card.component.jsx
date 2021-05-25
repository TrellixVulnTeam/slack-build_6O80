
//importing react
import React from "react";

//importing the css styles
import "./card.styles.css";


//exporting the card class that will be used in the card-list div

export const Card = props => (

    <div className ="cardContainer">

        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>

        <h2> {props.monster.name} </h2>
        <p>{props.monster.email}</p>
    </div>

)