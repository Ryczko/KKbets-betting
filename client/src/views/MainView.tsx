import PlacedCoupon from 'components/PlacedCoupon/PlacedCoupon';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminPage from 'views/Admin/AdminPage';
import MainPage from 'views/MainPage/MainPage';
import UserPage from 'views/UserPage/UserPage';
import { StyledMainView } from './MainView.css';

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
                <Route path="/coupons/:id">
                    <PlacedCoupon />
                </Route>
                <Route path="/admin">
                    <AdminPage />
                </Route>
            </Switch>
        </StyledMainView>
    );
}

export default MainView;
