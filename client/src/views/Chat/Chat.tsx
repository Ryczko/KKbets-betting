import Message from 'components/chat/Message';
import React, { useContext, useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Button from 'shared/Button/Button';
import { StyledChat } from './Chat.css';
import { AuthContext } from 'context/AuthContext';
import axiosConfig from 'utilities/axiosConfig';
import Loader from 'shared/Spinner/Loader';

function Chat(): JSX.Element {
    const { userData } = useContext(AuthContext);
    const [chatMessage, setChatMessage] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const socketRef: any = useRef();
    const [messages, setMessages] = useState<any>([]);
    const [coolDown, setCoolDown] = useState<boolean>(false);

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
        setIsLoaded(true);
    };

    const handleSearchChange = (e: any) => {
        setChatMessage(e.target.value);
    };

    function receivedMessage(message: any) {
        setMessages((oldMsgs: any) => [message, ...oldMsgs]);
    }

    const submitChatMessage = (e: any) => {
        e.preventDefault();
        if (coolDown) return;

        setCoolDown(true);

        const userId = userData._id;

        socketRef.current.emit('newChatMessage', {
            chatMessage,
            user: userId
        });
        setChatMessage('');

        setTimeout(() => {
            setCoolDown(false);
        }, 5000);
    };

    return (
        <StyledChat>
            <div className="messages">
                {isLoaded ? (
                    messages.map((message: any) => {
                        return (
                            <Message
                                userId={message.user._id}
                                nickname={message.user.username}
                                avatarUrl={message.user.avatarUrl}
                                message={message.message}
                                admin={message.user.admin}
                                date={message.date}
                            />
                        );
                    })
                ) : (
                    <Loader absolute />
                )}
            </div>
            <div className="bottom">
                <form>
                    <input placeholder="Your message" value={chatMessage} onChange={handleSearchChange} />
                    <Button
                        blocked={coolDown}
                        click={submitChatMessage}
                        fill
                        style={{ fontSize: '0.9rem', margin: '0px' }}
                    >
                        Send
                    </Button>
                </form>
            </div>
        </StyledChat>
    );
}

export default Chat;
