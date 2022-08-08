import { CircularProgress } from '@mui/material';
import { StyledLoader } from './Loader.css';

export interface LoaderProps {
  minHeight?: number;
  className?: string;
}

function Loader({ minHeight, className }: LoaderProps): JSX.Element {
  return (
    <StyledLoader className={className} minHeight={minHeight}>
      <CircularProgress />
    </StyledLoader>
  );
}

export default Loader;
