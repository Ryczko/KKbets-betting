import { ComponentType, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { AuthContext } from '../context/AuthContext';

const withAdminProtectedRoute = (WrappedComponent: ComponentType) => {
  const HocComponent = ({ ...props }) => {
    const { isLogged, isUserDataLoaded, userData } = useContext(AuthContext);

    if (isLogged && userData.admin) {
      return <WrappedComponent {...props} />;
    } else if (isUserDataLoaded) {
      return <Navigate to="/" />;
    } else {
      return <Loader />;
    }
  };

  return HocComponent;
};

export default withAdminProtectedRoute;
