import React, { CSSProperties } from 'react';
import { useTheme } from 'styled-components';
import Avatar from '../../../components/Avatar/Avatar';

import Crown from './Crown';
import { RankingPlaceProps } from './RankingPlace';
import { StyledTopPlaces } from './TopPlaces.css';

function TopPlaces(props: { data: RankingPlaceProps[] }): JSX.Element {
  const theme = useTheme();
  const commonStyles: CSSProperties = {
    height: '55px',
    width: '55px',
    border: `2px solid ${theme.colors.font.dark}`,
    boxShadow: `0px 0px 16px -8px ${theme.colors.font.dark}`
  };

  return (
    <StyledTopPlaces>
      {props.data[1] && (
        <div className="field" style={{ left: '0px', bottom: '0' }}>
          <div className="place">2</div>
          <Avatar username={props.data[1].username} width="55px" style={commonStyles} src={props.data[1].avatarUrl} />
          <div className="points">{props.data[1].points}</div>
          <div className="name">{props.data[1].username}</div>
        </div>
      )}
      {props.data[0] && (
        <div
          className="field"
          style={{
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1
          }}
        >
          <Crown
            style={{
              bottom: '92%',
              position: 'absolute',
              width: '50px',
              height: '50%',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />
          <Avatar
            width="70px"
            username={props.data[0].username}
            style={{
              ...commonStyles,
              height: '70px',
              width: '70px'
            }}
            src={props.data[0].avatarUrl}
          />
          <div className="points">{props.data[0].points}</div>
          <div className="name">{props.data[0].username}</div>
        </div>
      )}

      {props.data[2] && (
        <div className="field" style={{ right: '0px', bottom: '0px' }}>
          <div className="place">3</div>
          <Avatar username={props.data[2].username} width="55px" style={commonStyles} src={props.data[2].avatarUrl} />
          <div className="points">{props.data[2].points}</div>
          <div className="name">{props.data[2].username}</div>
        </div>
      )}
    </StyledTopPlaces>
  );
}

export default TopPlaces;
