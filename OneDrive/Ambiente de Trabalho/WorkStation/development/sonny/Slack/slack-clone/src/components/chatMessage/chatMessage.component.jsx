

import React from "react";
import "../chatMessage/_chatMessage.styles.scss";


const ChatMessage = ({message, timestamp, user, userImage}) => {

    return (

        <div className="messageContainer">

            <img src={userImage} alt="" />

            <div className="messageInfo">
                <h4>
                    {user}{""}
                    <span>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>

                <p>{message}</p>
            </div>

        </div>
    )
}

export default ChatMessage;