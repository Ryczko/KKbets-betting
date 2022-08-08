import { IBadgeFrontend } from '@kkbets/api-interfaces';
import Badge from '../../../../components/Badge/Badge';
import { StyledUserBadges } from './UserBadges.css';

interface UserBadgesProps {
  badges: IBadgeFrontend[];
}

export default function UserBadges({ badges }: UserBadgesProps) {
  return (
    <StyledUserBadges>
      <h2>
        <i className="icon-award" />
        Badges
      </h2>
      <div className="badges">
        {badges && badges?.length > 0 ? (
          badges?.map((badge) => (
            <Badge key={badge._id} name={badge.name} description={badge.description} src={badge.image} width={60} />
          ))
        ) : (
          <h3 className="no-badges">User currently has no badge</h3>
        )}
      </div>
    </StyledUserBadges>
  );
}
