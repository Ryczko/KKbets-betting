import Avatar from '../../../../components/Avatar/Avatar';
import { transformDate } from '../../../../utilities/transformDate';
import { StyledMessage } from './Message.css';

interface MessageProps {
  message: string;
  nickname: string;
  avatarUrl: string;
  userId: string;
  admin?: boolean;
  date: string;
}

function Message(props: MessageProps): JSX.Element {
  return (
    <StyledMessage admin={props.admin}>
      <Avatar width="40px" blockLink src={props.avatarUrl} />
      <div className="message">
        <div className="head">
          <p className="nickname">{props.nickname}</p>
          <p className="date">{transformDate(props.date)}</p>
        </div>

        <p>{props.message}</p>
      </div>
    </StyledMessage>
  );
}

export default Message;
