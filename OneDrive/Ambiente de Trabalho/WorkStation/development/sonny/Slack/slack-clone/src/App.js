import React from 'react';
import "./styles/app.scss";

//React Router
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

//COMPONENTS
import LoginPage from './pages/login/loginPage.component';
import Header from './components/header/header.component';
import SideBar from './components/sidebar/sidebar.component';
import Chat from './components/chat/chat.component';

//firebase
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from './firebase';

//React SPINKIT
import Spinner from "react-spinkit";




function App() {

  const [user, loading] = useAuthState(auth);

  if(loading){

    return(

      <div className="loadingContainer">

        <div className="loadingContainer_contents">

          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png" alt=""/>

          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />

        </div>

      </div>


    )
  }

  return (
    <div className="app">

      <Router>

        {!user ? (<LoginPage/>) : (

            <>

              <Header/>

              <div className="appBody">

                <SideBar/> 

                <Switch>
                        <Route exact path="/">
                            <Chat/>
                        </Route>
                </Switch>

              </div>


            </>



        )}

           
      </Router>
     
    </div>
  );
}

export default App;
