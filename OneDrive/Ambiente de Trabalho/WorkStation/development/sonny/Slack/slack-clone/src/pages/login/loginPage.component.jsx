


import React from "react";
import "../login/_LoginPage.styles.scss";

//MAATERIAL UI
import { Button } from "@material-ui/core";

//FIREBASE
import { auth, provider } from "../../firebase";



const LoginPage = () => {

    const signIn = (e)=> {

        e.preventDefault();

        auth.signInWithPopup(provider).catch((error) => 

            alert(error.message));

    }


    return(

        <div className="loginContainer">

            <div className="loginInner">

             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png" alt=""/>

                <h1>Sign In To The Slack Clone</h1>
                <p>Developed By KenDevs</p>

                <Button onClick={signIn}>Sign in with Google</Button>
            </div>

           

          

        </div>
    )
}

export default LoginPage;