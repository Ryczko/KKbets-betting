import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

interface AuthDisplayOnlyWrapperProps {
  children: JSX.Element;
}

export default function AuthDisplayOnlyWrapper(props: AuthDisplayOnlyWrapperProps) {
  const { isLogged } = useContext(AuthContext);

  return isLogged ? props.children : null;
}
