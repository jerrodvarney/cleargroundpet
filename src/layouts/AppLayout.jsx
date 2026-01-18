import Footer from '@/components/footer/Footer';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
