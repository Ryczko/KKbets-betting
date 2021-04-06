import { StyledMainView } from './MainView.css';

export interface MainViewProps {
    tight: boolean;
}

function MainView({ tight }: MainViewProps): JSX.Element {
    return <StyledMainView tight={tight}></StyledMainView>;
}

export default MainView;
