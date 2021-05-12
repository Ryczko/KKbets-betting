import Login from 'components/Auth/Login';
import Coupon from 'components/Coupon/Coupon';
import PlacedCoupon from 'components/PlacedCoupon/PlacedCoupon';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminPage from 'views/Admin/AdminPage';
import MainPage from 'views/MainPage/MainPage';
import UserPage from 'views/UserPage/UserPage';
import CouponsList from './CouponsList/CouponsList';
import { StyledMainView } from './MainView.css';
import Ranking from './Ranking/Ranking';

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
                <Route path="/coupon">
                    <Coupon />
                </Route>
                <Route path="/login">
                    <Login isOpened={true} shortcut={false} />
                </Route>
                <Route path="/coupons" exact>
                    <CouponsList />
                </Route>
                <Route path="/coupons/:id">
                    <PlacedCoupon />
                </Route>
                <Route path="/ranking">
                    <Ranking />
                </Route>
                <Route path="/admin">
                    <AdminPage />
                </Route>
                <Route>
                    <MainPage />
                </Route>
            </Switch>
        </StyledMainView>
    );
}

export default MainView;
