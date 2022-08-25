import Loader from '../components/Loader/Loader';
import { StyledBackdropLoaderWrapper } from './BackdropLoaderWrapper.css';

interface BackdropLoaderWrapperProps {
  isLoading: boolean;
  children: JSX.Element;
}

export default function LoaderWrapper(props: BackdropLoaderWrapperProps): JSX.Element {
  const { isLoading, children } = props;

  return (
    <StyledBackdropLoaderWrapper>
      {isLoading && (
        <div className="backdrop">
          <Loader minHeight={0} />
        </div>
      )}
      {children}
    </StyledBackdropLoaderWrapper>
  );
}
