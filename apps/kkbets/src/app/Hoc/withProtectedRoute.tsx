import { ComponentType, useContext } from 'react';
import AuthRequired from '../components/AuthRequired/AuthRequired';
import Loader from '../components/Loader/Loader';
import { AuthContext } from '../context/AuthContext';

const withProtectedRoute = (WrappedComponent: ComponentType) => {
  const HocComponent = ({ ...props }) => {
    const { isLogged, isUserDataLoaded } = useContext(AuthContext);

    if (isLogged) {
      return <WrappedComponent {...props} />;
    } else if (isUserDataLoaded) {
      return <AuthRequired />;
    } else {
      return <Loader />;
    }
  };

  return HocComponent;
};

export default withProtectedRoute;
