import Message from 'components/chat/Message';
import React from 'react';

import Button from 'shared/Button/Button';
import { StyledChat } from './Chat.css';

function Chat(): JSX.Element {
    return (
        <StyledChat>
            <div className="messages">
                <Message userId="123" nickname="aaa" avatarUrl="" message="faskdjflkasdjfklajsdflkj" />
                <Message userId="123" nickname="aaa" avatarUrl="" message="faskdjflkasdjfklajsdflkj" />
                <Message userId="123" nickname="aaa" avatarUrl="" message="faskdjflkasdjfklajsdflkj" />
                <Message userId="123" nickname="aaa" avatarUrl="" message="faskdjflkasdjfklajsdflkj" />
                <Message userId="123" nickname="aaa" avatarUrl="" message="faskdjflkasdjfklajsdflkj" />
                <Message
                    userId="123"
                    nickname="aaa"
                    avatarUrl=""
                    message="faskdjflkasdjfka sfd asd fasd fasd fassadfasd fa sdfas dfa dfsdf adsf add fasdfads f asdf asd fasdasdfasdf asdf asd fasd fadsf adsf adsf asd fasd fasd flajsdflkj"
                />
                <Message userId="123" nickname="aaa" avatarUrl="" message="faskdjflkasdjfklajsdflkj" />
                <Message userId="123" nickname="aaa" avatarUrl="" message="faskdjflkasdjfklajsdflkj" />
                <Message userId="123" nickname="aaa" avatarUrl="" message="faskdjflkasdjfklajsdflkj" />
                <Message userId="123" nickname="aaa" avatarUrl="" message="faskdjflkasdjfklajsdflkj" />
            </div>
            <div className="bottom">
                <form>
                    <input />
                    <Button fill style={{ fontSize: '0.9rem', padding: '5px' }}>
                        Send
                    </Button>
                </form>
            </div>
        </StyledChat>
    );
}

export default Chat;
