import React from 'react'
import './Feed.css';
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            {/**Static Post */}
            <Post 
            profilePic=""
            message="Sample Message2!!:)"
            timeStamp="1601493943737"
            imgName="imagName"
            userName="Frankie"
            />
            <Post 
            profilePic=""
            message="Sample Message3!!:)"
            timeStamp="1601493943737"
            imgName="imagName"
            userName="Yash"
            />
            <Post 
            profilePic=""
            message="Sample Message1!!:)"
            timeStamp="1601493943737"
            imgName="imagName"
            userName="Jaspreet"
            />
            <Post 
            profilePic=""
            message="Sample Message1!!:)"
            timeStamp="1601493943737"
            imgName="imagName"
            userName="Gautam"
            />
        </div>
    )
}

export default Feed
