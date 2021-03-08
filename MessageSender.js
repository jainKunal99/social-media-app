import React,{useState} from 'react'
import './MessageSender.css'
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {

    const [input , setInput] = useState("");
    const [image, setImage ] = useState(null);
    const handleChange = (e)=>{
        //Grab the file
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }
    const handleSubmit = (e)=>{
        //submits the data to backend mongoDb
        console.log('Add files to mongodb');
    }

    return (
        <div className="messageSender">
            <div className="messageSenderTop">
                <Avatar src="https://www.w3schools.com/howto/img_avatar.png" />
                <form>
                    <input type="text"
                    className="messageSender_input"
                    placeholder="what's on your mind?"
                    value={input}
                    onChange={(e)=>{
                        setInput(e.target.value)
                    }}/>
                    <Input 
                    type="file" 
                    className="messageSender_fileSelector"
                    onChange={handleChange}
                    />
                    <button type="submit" onClick={handleSubmit}>Hidden Submit</button>
                </form>
            </div>
            {/**further markup => */}
            <div className="messageSender_button">
                <div className="messageSener_option"><VideocamIcon  style={{color: 'red'}}/><h3>Live Video</h3></div>
                <div className="messageSener_option"><PhotoLibraryIcon  style={{color: 'green'}}/><h3>Photo/Video</h3></div>
                <div className="messageSener_option"><InsertEmoticonIcon  style={{color: 'orange'}}/><h3>Feeling/Activity</h3></div>
            </div>
        </div>
    )
}

export default MessageSender
