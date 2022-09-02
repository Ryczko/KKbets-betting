import Avatar from '../../../../components/Avatar/Avatar';
import { formatDate, getTimeDistance } from '../../../../utilities/dateUtils';
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
      <Avatar width="40px" src={props.avatarUrl} username={props.nickname} />
      <div className="message">
        <div className="head">
          <p className="nickname">{props.nickname}</p>
          <p className="date">{getTimeDistance(props.date)}</p>
        </div>

        <p>{props.message}</p>
      </div>
    </StyledMessage>
  );
}

export default Message;
