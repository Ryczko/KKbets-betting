import React from 'react';
import { useDispatch } from 'react-redux';
import { addEvent, removeEvent } from '../../../store/actions';
import { MatchProps } from '../components/ImportantMatch';

export interface WithAddEvent {
  addEventHandler: (e: React.MouseEvent<HTMLElement>) => void;
}

const withAddEvent =
  (Component: React.ComponentType<MatchProps & WithAddEvent>): React.FC<MatchProps> =>
  (props) => {
    const dispatch = useDispatch();
    const addEventHandler = (e: React.MouseEvent<HTMLElement>) => {
      const target = e.target as HTMLTextAreaElement;
      if (target && target.parentElement && target.dataset.bet && target.dataset.course) {
        const activeElement = target.parentElement.querySelector('.active');
        if (activeElement) {
          activeElement.classList.remove('active');
          dispatch(removeEvent(props.eventId));
          if (target === activeElement) {
            return;
          }
        }
        target.classList.add('active');
        dispatch(
          addEvent(
            props.eventId,
            target.dataset.bet,
            'winner',
            +target.dataset.course,
            `${props.teamHome.shortName}-${props.teamAway.shortName}`
          )
        );
      }
    };

    return <Component {...props} addEventHandler={addEventHandler} />;
  };

export default withAddEvent;
