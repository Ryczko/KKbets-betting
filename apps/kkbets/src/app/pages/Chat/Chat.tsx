import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Message from '../../features/chat/components/Message/Message';
import { AuthContext } from '../../context/AuthContext';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';
import axiosConfig from '../../utilities/axiosConfig';
import { StyledChat } from './Chat.css';
import LoaderWrapper from '../../wrappers/LoaderWrapper';

interface Message {
  user: {
    _id: string;
    username: string;
    avatarUrl: string;
    admin: boolean;
  };
  message: string;
  date: string;
}

function Chat(): JSX.Element {
  const { userData, isLogged } = useContext(AuthContext);
  const [chatMessage, setChatMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [coolDown, setCoolDown] = useState<boolean>(false);

  useEffect(() => {
    loadMessages();
    const socket = io(`${process.env.NX_APP_API_URL || 'http://localhost:3333'}`);
    socket.on('Output Chat Message', (message: Message) => {
      receivedMessage(message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const loadMessages = async () => {
    try {
      const res = await axiosConfig.get('/messages');
      setMessages(res.data);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMessageChange = (e: React.FormEvent<HTMLInputElement>) => {
    setChatMessage(e.currentTarget.value);
  };

  function receivedMessage(message: Message) {
    setMessages((oldMsgs) => [message, ...oldMsgs]);
  }

  const submitChatMessage = async (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    if (coolDown) return;

    setCoolDown(true);

    const userId = userData._id;

    await axiosConfig.post('/messages', {
      chatMessage,
      user: userId
    });

    setChatMessage('');

    setTimeout(() => {
      setCoolDown(false);
    }, 5000);
  };

  return (
    <LoaderWrapper isLoading={!isLoaded}>
      <StyledChat>
        <div className="top">
          <form>
            <input
              placeholder={isLogged ? 'Your message' : 'Login to write'}
              value={chatMessage}
              disabled={!isLogged}
              onChange={handleMessageChange}
            />
            <Button
              blocked={coolDown || !isLogged}
              click={submitChatMessage}
              fill
              style={{ fontSize: '0.9rem', margin: '0px' }}
            >
              Send
            </Button>
          </form>
        </div>
        <div className="messages">
          {messages.map((message, index) => {
            return (
              <Message
                key={index}
                userId={message.user._id}
                nickname={message.user.username}
                avatarUrl={message.user.avatarUrl}
                message={message.message}
                admin={message.user.admin}
                date={message.date}
              />
            );
          })}
        </div>
      </StyledChat>
    </LoaderWrapper>
  );
}

export default Chat;
