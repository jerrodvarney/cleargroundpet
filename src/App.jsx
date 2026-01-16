import Home from '@/pages/home/Home';
import Quote from '@/pages/quote/Quote';
import ThankYou from '@/pages/thank-you/ThankYou';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/thank-you" element={<ThankYou />} />

      {/* Non-existent endpoint redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
