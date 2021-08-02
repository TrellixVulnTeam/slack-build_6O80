
import React,{useState, useEffect} from 'react';

//API
import axios from '../../axios';
// import requests from '../../requests';

//styles
import styled from "styled-components";

//animations
import {motion} from "framer-motion";







function Game({fetchUrl}) {

    const base_url = "https://image.tmdb.org/t/p/original/";

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData(){

            const request = await axios.get(fetchUrl);

            setMovies(request.data.results);

            return request;
        }

        fetchData();


    }, [fetchUrl]);

    console.log(movies);

    return (

        <GameDiv>

        

                    {movies.map((movie) => 

             (

                    <GameContainer>

                        <h3>{movie.title}</h3>
                        <p>{movie.release_date}</p>
                        <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                    </GameContainer>
                

            )


            )}

        </GameDiv>
    
    )
}

export default Game;

const GameDiv = styled(motion.div)`

min-height: 80vh;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;



`;


const GameContainer = styled(motion.div)`

    min-height: 20vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    

    h3{
        font-size: 1.3rem;
        padding: 1.5rem;
        color: #333;
    }

    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }

    img{

        width: 100%;
        object-fit: cover;
        height: 100%;
        bottom:0;
        
    }

`;