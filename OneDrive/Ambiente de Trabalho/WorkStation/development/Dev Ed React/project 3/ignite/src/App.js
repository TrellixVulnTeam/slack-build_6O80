
import React from 'react';

//API
import requests from "./requests";


//component
import Game from "./components/games/Game";

//styles
import styled from "styled-components";

//animations
import {motion} from "framer-motion";


function App() {

  
  return (
    
          
            <GameList>
                        
              <h2>Top Rated Movies</h2>


               <Game fetchUrl={requests.fetchTopRated} />

               <h2>Horror Movies</h2>


                <Game fetchUrl={requests.fetchHorrorMovies} />

                      
            </GameList>
            
           
     
 

      

    
  );
}

export default App;

const GameList = styled(motion.div)`

*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html{

        &::-webkit-scrollbar{

            width: 0.5rem;
        }

        &::-webkit-scrollbar-thumb{

            background-color: darkgrey;
        }
    }


 
 padding: 0rem 2rem;
 font-family: 'Montserrat', sans-serif;


  h2{
    padding: 5rem 0rem;
  }

`;

