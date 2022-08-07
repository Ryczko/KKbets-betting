import { CircularProgress } from '@mui/material';
import { StyledLoader } from './Loader.css';

function Loader(): JSX.Element {
  return (
    <StyledLoader>
      <CircularProgress />
    </StyledLoader>
  );
}

export default Loader;
