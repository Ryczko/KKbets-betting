import { Navigate, Route, Routes } from 'react-router-dom';
import Coupon from '../../features/coupons/Coupon';
import AdminPage from '../../pages/Admin/AdminPage';

import Chat from '../../pages/Chat/Chat';
import CouponsList from '../../pages/CouponsList/CouponsList';
import MainPage from '../../pages/MainPage/MainPage';
import { StyledMainView } from './MainView.css';
import Ranking from '../../pages/Ranking/Ranking';
import UserPage from '../../pages/UserPage/UserPage';
import PlacedCoupon from '../../features/couponsHistory/components/PlacedCoupon';
import EditProfile from '../../pages/EditProfile/EditProfile';

export interface MainViewProps {
  tight: boolean;
}

function MainView({ tight }: MainViewProps): JSX.Element {
  return (
    <StyledMainView tight={tight}>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/users/:username" element={<UserPage />} />
        <Route path="/edit-profile" element={<EditProfile />} />

        <Route path="/coupon" element={<Coupon />} />

        <Route path="/coupons" element={<CouponsList />} />

        <Route path="/coupons/:id" element={<PlacedCoupon />} />

        <Route path="/ranking" element={<Ranking />} />

        <Route path="/chat" element={<Chat />} />

        <Route path="/admin" element={<AdminPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </StyledMainView>
  );
}

export default MainView;
