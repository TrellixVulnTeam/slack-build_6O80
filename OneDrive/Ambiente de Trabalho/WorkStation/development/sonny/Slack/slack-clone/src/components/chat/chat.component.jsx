

import React,{useRef, useEffect} from "react";
import "../chat/_chat.styles.scss";

//MATERIAL UI ICONS
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

//COMPONENTS
import ChatInput from "../chatInput/chatInput.component";
import ChatMessage from "../chatMessage/chatMessage.component";

//REDUX
import { useSelector } from "react-redux";
import { selector_enterRoom } from "../../features/appSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";


//FIREBASE
import { db } from "../../firebase";



const Chat = () => {

    const chatRef = useRef(null);

    const roomId = useSelector(selector_enterRoom);

    const [roomDetails] = useDocument(

        roomId && db.collection("rooms").doc(roomId)
    )

    const [roomMessages,loading] = useCollection(

        roomId && 
        db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
    )

    useEffect(() => {

        chatRef?.current?.scrollIntoView({

            behaviour: "smooth",

        });
      
    }, [roomId, loading])


    return(

        <div className="chatContainer">

            {roomId && roomMessages && (

                 <>
                    <div className="chatHeader">

                        <div className="headerLeft_chat">
                            <h4><strong>{roomDetails?.data().name}</strong></h4>
                            <StarOutlineIcon/>
                        </div>

                        <div className="headerRight_chat">

                            <InfoOutlinedIcon/>
                            <p>Details</p>
                        </div>

                    </div>

                    <div className="chatMessages">

                        {roomMessages?.docs.map(doc => {

                            const {timestamp, message, userImage, user} = doc.data();

                            return (

                                <ChatMessage
                                    key={doc.id}
                                    user={user}
                                    message={message}
                                    timestamp={timestamp}
                                    userImage={userImage}
                                />
                            )
                        })}

                        <div ref={chatRef} className="chatBottom">

                        </div>

                    </div>

                    <ChatInput
                            
                            chatRef={chatRef}
                            channelName={roomDetails?.data().name}
                            channelId={roomId}

                     />
                 </>



            )}

              
        </div>
    )
}

export default Chat;