import Message from 'components/chat/Message';
import React, { useContext, useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Button from 'shared/Button/Button';
import { StyledChat } from './Chat.css';
import { AuthContext } from 'context/AuthContext';
import axiosConfig from 'utilities/axiosConfig';

function Chat(): JSX.Element {
    const { userData } = useContext(AuthContext);
    const [chatMessage, setChatMessage] = useState('');
    const socketRef: any = useRef();
    const [messages, setMessages] = useState<any>([]);

    useEffect(() => {
        loadMessages();
        socketRef.current = io(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}`);
        socketRef.current.on('Output Chat Message', (message: any) => {
            receivedMessage(message);
        });
    }, []);

    const loadMessages = async () => {
        const res = await axiosConfig.get('/messages');
        setMessages(res.data);
    };

    const handleSearchChange = (e: any) => {
        setChatMessage(e.target.value);
    };

    function receivedMessage(message: any) {
        setMessages((oldMsgs: any) => [message, ...oldMsgs]);
    }

    const submitChatMessage = (e: any) => {
        e.preventDefault();

        const userId = userData._id;

        socketRef.current.emit('newChatMessage', {
            chatMessage,
            user: userId
        });
        setChatMessage('');
    };

    return (
        <StyledChat>
            <div className="messages">
                {messages.map((message: any) => {
                    return (
                        <Message
                            userId={message.user._id}
                            nickname={message.user.username}
                            avatarUrl={message.user.avatarUrl}
                            message={message.message}
                            admin={message.user.admin}
                        />
                    );
                })}
            </div>
            <div className="bottom">
                <form>
                    <input placeholder="Your message" value={chatMessage} onChange={handleSearchChange} />
                    <Button click={submitChatMessage} fill style={{ fontSize: '0.9rem', margin: '0px' }}>
                        Send
                    </Button>
                </form>
            </div>
        </StyledChat>
    );
}

export default Chat;
