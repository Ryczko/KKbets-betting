import { useState } from 'react';

import withAlert, { WithAlertProps } from '../../../Hoc/withAlert';
import Input from '../../../components/Input/Input';
import axiosConfig from '../../../utilities/axiosConfig';
import BackdropLoaderWrapper from '../../../wrappers/BackdropLoaderWrapper';
import AdminConfirmButton from '../components/AdminConfirmButton';
import AdminInput from '../components/AdminInput/AdminInput';

function AdminCategories(props: WithAlertProps): JSX.Element {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (val: string): void => {
    setValue(val);
  };

  const addCategoryHandler = async () => {
    props.setIsErrorOpened(false);
    try {
      setLoading(true);
      await axiosConfig.post('/categories', {
        name: value
      });
      props.setIsSuccessOpened(true);

      setValue('');
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
        <AdminInput label="cateogry name" type="text" update={(e) => handleChange(e.target.value)} value={value} />
        <AdminConfirmButton content="Add Category" onConfirm={addCategoryHandler} />
      </>
    </BackdropLoaderWrapper>
  );
}

export default withAlert(AdminCategories);
