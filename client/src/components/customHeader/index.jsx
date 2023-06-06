import React from 'react';
import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";

const CustomerHeader = ({ chat }) => {
    
    return (
        <div className="chat-header">
            <div className="flexbetween">
                <ChatBubbleLeftRightIcon className='icon-chat' />
                <h3 className="header-text">{chat.title}</h3>
            </div>
                            <div className='bb'> Add Bot as a member to chat with AI. </div>    
            <div className="flexbetween">
                <PhoneIcon className='icon-phone' />
                {chat.description !== "⬅️ ⬅️ ⬅️"
                    ? (<p className="header-text">{chat.description}</p>)
                    : (<p className="header-text">Add Chatbot_ to start.</p>)
                }
            </div>
        </div>
    );
};

export default CustomerHeader;