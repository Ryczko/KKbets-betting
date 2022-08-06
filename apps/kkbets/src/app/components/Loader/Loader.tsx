import { StyledLoader } from './Loader.css';
import Ball from './Ball';

export interface LoaderProps {
  absolute?: boolean;
}

function Loader(props: LoaderProps): JSX.Element {
  return (
    <StyledLoader absolute={props.absolute}>
      <div className="shadow"></div>
      <div className="gravity">
        <Ball class="ball" />
      </div>
    </StyledLoader>
  );
}

export default Loader;
