import { useState } from 'react';
import withAlert, { WithAlertProps } from '../../../Hoc/withAlert';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import Loader from '../../../components/Loader/Loader';
import axiosConfig from '../../../utilities/axiosConfig';
import LoaderWrapper from '../../../wrappers/LoaderWrapper';

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

  const addCategoryHandler = async () => {
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
    <LoaderWrapper isLoading={loading}>
      <>
        <Input placeholder="Team name" value={teamName} onChange={teamNameChangeHandler} />
        <Input placeholder="Short team name" value={teamShortname} onChange={shortTeamNameChangeHandler} />
        <Input placeholder="Image URL" value={imageUrl} onChange={imageChangeHandler} />

        <Button fill style={{ padding: '10px 14px' }} click={addCategoryHandler}>
          Add
        </Button>
      </>
    </LoaderWrapper>
  );
}

export default withAlert(AdminTeams);
