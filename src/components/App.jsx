import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import ThanksPage from 'pages/ThanksPage/ThanksPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="thanks" element={<ThanksPage />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
};

export default App;
