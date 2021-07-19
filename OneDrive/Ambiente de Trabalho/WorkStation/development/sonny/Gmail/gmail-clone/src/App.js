import React from 'react';
import "./styles/app.scss";//styling


//REACT ROUTER DOM

import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";  

//REDUX

import {useSelector} from "react-redux";
import { selectsendMessageIsOpen } from './features/mail.slice';
// import { selectUser } from './features/user.slice';



//components
// import LoginPage from "./pages/loginPage/loginPage.component";
import Header from './components/header/header.component';
import SideBar from './components/sidebar/sidebar.component';
import Mail from './components/mail_/mail.component';
import EmailList from './components/emailList_/email_list.component';
import SendMail from './components/sendmail/sendMail.component';




function App() {

  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  // const user = useSelector(selectUser)
  

  return (

  

    <Router>

              
              <div className="App">

            
              <Header/>

                  <div className ="appBody">

                    <SideBar/>

                    <Switch>

                        <Route exact path="/">
                          <EmailList/>
                        </Route>

                        <Route  path="/mail">
                          <Mail/>
                        </Route>

                    </Switch>

                  </div>

                {sendMessageIsOpen && <SendMail/> }
                
            
            </div>

          
      </Router>
   
  )
};

export default App;
