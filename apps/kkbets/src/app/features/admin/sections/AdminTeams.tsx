import { useState } from 'react';
import withAlert, { WithAlertProps } from '../../../Hoc/withAlert';

import axiosConfig from '../../../utilities/axiosConfig';
import BackdropLoaderWrapper from '../../../wrappers/BackdropLoaderWrapper';
import AdminConfirmButton from '../components/AdminConfirmButton';
import { AdminRow } from '../AdminStyles.css';
import AdminInput from '../components/AdminInput/AdminInput';

function AdminTeams(props: WithAlertProps): JSX.Element {
  const [teamName, setTeamName] = useState('');
  const [teamShortname, setTeamShortname] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [loading, setLoading] = useState(false);

  const teamNameChangeHandler = (val: string): void => {
    setTeamName(val);
  };
  const shortTeamNameChangeHandler = (val: string): void => {
    setTeamShortname(val);
  };
  const imageChangeHandler = (val: string): void => {
    setImageUrl(val);
  };

  const addTeamHandler = async () => {
    try {
      setLoading(true);
      await axiosConfig.post('/teams', {
        name: teamName,
        shortName: teamShortname,
        image: imageUrl
      });
      props.setIsSuccessOpened(true);
      setTeamShortname('');
      setImageUrl('');
      setTeamName('');
    } catch (err) {
      props.setError(err.response.data);
      props.setIsErrorOpened(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BackdropLoaderWrapper isLoading={loading}>
      <>
        <AdminRow>
          <AdminInput
            label="Team name"
            type="text"
            update={(e) => teamNameChangeHandler(e.target.value)}
            value={teamName}
          />
          <AdminInput
            label="Short team name"
            type="text"
            update={(e) => shortTeamNameChangeHandler(e.target.value)}
            value={teamShortname}
          />
        </AdminRow>
        <AdminInput label="Image URL" type="text" update={(e) => imageChangeHandler(e.target.value)} value={imageUrl} />

        <AdminConfirmButton content="Add Team" onConfirm={addTeamHandler} />
      </>
    </BackdropLoaderWrapper>
  );
}

export default withAlert(AdminTeams);
