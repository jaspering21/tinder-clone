import React, {useState} from 'react'
import Avatar from "@material-ui/core/Avatar"
import './ChatScreen.css'

function ChatScreen() {
    const [input, setInput] = useState ('');
    const [messages, setMessages] = useState([

        {
            name : 'Jennie',
            image: 'https://i.pinimg.com/originals/fe/3e/b0/fe3eb0a2fa9b9ee0c7f106382183cd57.jpg',
            message: 'Whats up'
        },
        {
            name: 'Jennie',
            image: 'https://i.pinimg.com/originals/fe/3e/b0/fe3eb0a2fa9b9ee0c7f106382183cd57.jpg',
            message: 'Hows it going!'
        },
        {
            image : 'https://i.pinimg.com/474x/cc/a9/6c/cca96c9170a9a16b48c609a1a4dfcf66.jpg',
            message : "Hi How are you Jennie"
        }
    ])

    const handleSend = e =>{
        e.preventDefault();
        setMessages ([...messages,{ message : input}])
        setInput ('');
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">
                YOU MATCHED WITH JENNIE ON 10/08/20
            </p>
            {messages.map(message => (
                message.name ? (
                    <div className = "chatScreen__message">

                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className = "chatScreen__message">
                        <p className = "chatScreen__textUser">{message.message}</p>
                        <Avatar
                        className="chatScreen__imageUser"
                        alt={message.name}
                        src={message.image}
                    />

                    </div>
                )
            ))}
        
                <form className="chatScreen__input">
                    <input 
                    value = {input}
                    onChange = {e => setInput (e.target.value)}
                    className = "chatScreen__inputField"
                    placeholder="Type a message" type="text"/>
                    <button
                    onClick = {handleSend}
                    className = "chatScreen__inputButton"
                    > SEND</button>
                </form>
        </div>
    )
}

export default ChatScreen
