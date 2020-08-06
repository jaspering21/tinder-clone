import React from 'react'
import './Chats.css'
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Jennie"
                message="hey"
                timestamp = "40 seconds ago"
                profilePic="https://i.pinimg.com/originals/fe/3e/b0/fe3eb0a2fa9b9ee0c7f106382183cd57.jpg"
            />
            <Chat
                name="Lisa"
                message="What's up"
                timestamp = "55 minutes ago"
                profilePic="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2020/04/09/0dec21b2-7a1c-11ea-9b24-e7152d1bf921_image_hires_181817.jpg?itok=xAg_QXKq&v=1586427505"
            />
            <Chat
                name="Rose"
                message="Hey how are you"
                timestamp = "2 days ago"
                profilePic="https://www.allkpop.com/upload/2020/02/content/121249/1581529740-rose.jpg"
            />
        </div>
    )
}

export default Chats