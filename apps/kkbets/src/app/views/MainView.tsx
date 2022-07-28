import { Route, Routes } from 'react-router-dom';
import Coupon from '../components/Coupon/Coupon';
import PlacedCoupon from '../components/PlacedCoupon/PlacedCoupon';
import AdminPage from './Admin/AdminPage';

import Chat from './Chat/Chat';
import CouponsList from './CouponsList/CouponsList';
import MainPage from './MainPage/MainPage';
import { StyledMainView } from './MainView.css';
import Ranking from './Ranking/Ranking';
import UserPage from './UserPage/UserPage';

export interface MainViewProps {
  tight: boolean;
}

function MainView({ tight }: MainViewProps): JSX.Element {
  return (
    <StyledMainView tight={tight}>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/account" element={<UserPage />} />

        <Route path="/coupon" element={<Coupon />} />

        <Route path="/coupons" element={<CouponsList />} />

        <Route path="/coupons/:id" element={<PlacedCoupon />} />

        <Route path="/ranking" element={<Ranking />} />

        <Route path="/chat" element={<Chat />} />

        <Route path="/admin" element={<AdminPage />} />

        <Route element={<MainPage />} />
      </Routes>
    </StyledMainView>
  );
}

export default MainView;
