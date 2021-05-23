import Avatar from 'components/User/Avatar';
import { StyledMessage } from './Message.css';

interface MessageProps {
    message: string;
    nickname: string;
    avatarUrl: string;
    userId: string;
}

function Message(props: MessageProps): JSX.Element {
    return (
        <StyledMessage>
            <Avatar width="40px" blockLink src={props.avatarUrl} />
            <div className="message">
                <p className="nickname">{props.nickname}</p>
                <p>{props.message}</p>
            </div>
        </StyledMessage>
    );
}

export default Message;