import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { StyledMainView } from './MainView.css';
import MainPage from './MainViews/MainPage';
import UserPage from './MainViews/UserPage';

export interface MainViewProps {
    tight: boolean;
}

function MainView({ tight }: MainViewProps): JSX.Element {
    return (
        <StyledMainView tight={tight}>
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/account">
                    <UserPage />
                </Route>
            </Switch>
        </StyledMainView>
    );
}

export default MainView;
