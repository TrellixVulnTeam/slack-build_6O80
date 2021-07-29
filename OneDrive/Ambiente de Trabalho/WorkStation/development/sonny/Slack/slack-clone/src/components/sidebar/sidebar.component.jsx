

import React from "react";
import "../sidebar/_sidebar.styles.scss";

//COMPONENTS
import SideBarOption from "../sidebaroption/sidebarOption.component";

//MATERIAL UI
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AddIcon from '@material-ui/icons/Add';


//FIREBASE
import { db } from "../../firebase";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import {useCollection} from "react-firebase-hooks/firestore";


const SideBar = () => {

    const [user] = useAuthState(auth);

    const [channels, loading, error] = useCollection(db.collection("rooms"));


    return(

        <div className="sideBarContainer">

            <div className="sideBarHeader">

                <div className="sideBarInfo">
                    <h2>Your Profile</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>

                <CreateIcon className="editIcon"/>

            </div>

            <SideBarOption Icon={InsertCommentIcon} title="Threads"/>
            <SideBarOption Icon={InboxIcon} title="Mentions & Reactions"/>
            <SideBarOption Icon={DraftsIcon} title="Saved Items"/>
            <SideBarOption Icon={BookmarkBorderIcon} title="Channel Browser"/>
            <SideBarOption Icon={PeopleAltIcon} title="People & User Groups"/>
            <SideBarOption Icon={AppsIcon} title="Apps"/>
            <SideBarOption Icon={FileCopyIcon} title="File Browser"/>
            <SideBarOption Icon={ExpandLessIcon} title="Show Less"/>

            <hr />
            <SideBarOption Icon={ExpandMoreIcon} title="Show More" />
            <hr />	 

            <SideBarOption Icon={AddIcon} addChannelOption title="Add Channel" />

            {channels?.docs.map(doc => (

                <SideBarOption key={doc.id} id={doc.id}   title={doc.data().name} />

            ))}

        </div>
    )
}

export default SideBar;