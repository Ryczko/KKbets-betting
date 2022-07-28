import { StyledBanner } from './Banner.css';

function Baner(props: { image: string }): JSX.Element {
  return (
    <StyledBanner>
      <img src={props.image} alt="baner" />
    </StyledBanner>
  );
}

export default Baner;
