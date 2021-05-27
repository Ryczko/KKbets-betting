import withAlert, { WithAlertProps } from 'Hoc/withAlert';
import { useState } from 'react';
import Button from 'shared/Button/Button';
import Input from 'shared/Input/Input';
import Loader from 'shared/Spinner/Loader';
import axiosConfig from 'utilities/axiosConfig';
import { AdminRow } from './AdminStyles.css';

function AdminCategories(props: WithAlertProps): JSX.Element {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (val: string): void => {
        setValue(val);
    };

    const addCategoryHandler = async () => {
        props.setIsErrorOpened?.(false);
        try {
            setLoading(true);
            await axiosConfig.post('/categories', {
                name: value
            });
            props.setIsSuccessOpened?.(true);

            setValue('');
        } catch (err) {
            props.setError?.(err.response.data);
            props.setIsErrorOpened?.(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <AdminRow>
                    <Input placeholder="cateogry name" value={value} onChange={handleChange} />
                    <Button fill style={{ padding: '12px' }} click={addCategoryHandler}>
                        Add
                    </Button>
                </AdminRow>
            )}
        </>
    );
}

export default withAlert(AdminCategories);
