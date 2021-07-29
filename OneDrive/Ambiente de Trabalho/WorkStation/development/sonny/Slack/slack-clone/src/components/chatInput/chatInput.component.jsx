

import React, {useState} from "react";
import "../chatInput/_chatInput.styles.scss";

//FIREBASE
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { db } from "../../firebase";

//MATERIAL UI
import { Button } from "@material-ui/core";




const ChatInput = ({channelId, channelName, chatRef}) => {

    const [user] = useAuthState(auth);
    const [input, setInput] = useState("");


    const sendMessage = e => {

        e.preventDefault();

        if(!channelId){

            return false
        }

        db.collection("rooms").doc(channelId).collection("messages").add({

            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,

        });

        chatRef?.current?.scrollIntoView({

            behaviour: "smooth",
            
        });
      

        setInput("");

    }


    return (

        <div className="chatInputContainer">

            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder={`Message ${channelName}`} />


                <Button type="submit" onClick={sendMessage}>SEND</Button>
            </form>

        </div>
    )
}

export default ChatInput;