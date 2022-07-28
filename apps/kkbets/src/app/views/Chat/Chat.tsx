import React, {
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { io, Socket } from 'socket.io-client';
import Message from '../../components/chat/Message';
import { AuthContext } from '../../context/AuthContext';
import Button from '../../shared/Button/Button';
import Loader from '../../shared/Spinner/Loader';
import axiosConfig from '../../utilities/axiosConfig';
import { StyledChat } from './Chat.css';

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
  const socketRef = useRef<Socket>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [coolDown, setCoolDown] = useState<boolean>(false);

  useEffect(() => {
    loadMessages();
    if (!socketRef.current) {
      socketRef.current = io(
        `${process.env.NX_APP_API_URL || 'http://localhost:3333'}`
      );

      socketRef.current.on('Output Chat Message', (message: Message) => {
        receivedMessage(message);
      });
    }
  }, [coolDown]);

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

  const submitChatMessage = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    if (coolDown) return;

    setCoolDown(true);

    const userId = userData._id;

    socketRef.current?.emit('newChatMessage', {
      chatMessage,
      user: userId,
    });
    setChatMessage('');

    setTimeout(() => {
      setCoolDown(false);
    }, 5000);
  };

  return (
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
        {isLoaded ? (
          messages.map((message, index) => {
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
          })
        ) : (
          <Loader absolute />
        )}
      </div>
    </StyledChat>
  );
}

export default Chat;
