import Home from '@/pages/Home';
import '@/styles/global.scss';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* NON-EXISTENT ENDPOINT REDIRECT */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
