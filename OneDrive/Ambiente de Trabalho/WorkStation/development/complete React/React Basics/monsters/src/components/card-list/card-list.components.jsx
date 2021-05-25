
//Card List component file


//importing react
import React from "react";


//import card component

import { Card } from "../card/card.component";

//import the style.css file
import  "./card-list.styles.css";



//creating and exporting a functional component | cardlist
//NOTE: always use camel case on components names 

export const CardList = props =>  { 


return <div className ="card-list"> 

{props.monsters.map(monster => (

<Card key={monster.id} monster={monster} />

))}

</div>;

}