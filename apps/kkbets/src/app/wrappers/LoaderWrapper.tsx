import Loader from '../components/Loader/Loader';

interface LoaderWrapperProps {
  isLoading: boolean;
  children: JSX.Element;
}

export default function LoaderWrapper(props: LoaderWrapperProps): JSX.Element {
  const { isLoading, children } = props;
  return isLoading ? <Loader /> : children;
}
