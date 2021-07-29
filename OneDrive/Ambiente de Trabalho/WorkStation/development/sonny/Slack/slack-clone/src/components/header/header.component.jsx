
import React from "react";
import "../header/_header.styles.scss";

//MATERIAL UI
import  {Avatar} from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

//firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";


const Header = () => {

    const [user] = useAuthState(auth);

    console.log("this", user);


    return (

        <div className="headerContainer">

            <div className="headerLeft">
                <Avatar onClick={() => auth.signOut()} src={user?.photoURL} className="ava"/> 
                <AccessTimeIcon/>
            </div>

            <div className="headerSearch">
                <SearchIcon/>
                <input type="text" placeholder="Search" />
            </div>

            <div className="headerRight">

                <HelpOutlineIcon/>

            </div>

        </div>
    )
}

export default Header;