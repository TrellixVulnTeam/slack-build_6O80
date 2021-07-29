

import React from "react";
import "../sidebaroption/_sidebarOption.styles.scss";

//FIREBASE
import { db } from "../../firebase";

//REDUX
import {useDispatch} from "react-redux";
import { enterRoom } from "../../features/appSlice";




const SideBarOption = ({Icon, title, addChannelOption, id}) => {

   const dispatch = useDispatch();


    const addChannel = () => {

        const channelName = prompt("Enter Channel Name");

        if (channelName){

            db.collection("rooms").add({

                name: channelName,
            })
        }
    }


    const selectChannel = () => {

        if(id){

            dispatch(enterRoom({

                roomId: id,

            }))
        }
    }


    return (

        <div onClick={addChannelOption ? addChannel : selectChannel} className="sideBarOption_container">

            {Icon && <Icon fontSize="small" style={{padding:10}} />}

            {Icon ? (

                <h3>{title}</h3>
            ):(
                <div className="sideBarOption_channel">
                    <span>#</span>{title}
                </div>
            )}

        </div>
    )
}

export default SideBarOption;