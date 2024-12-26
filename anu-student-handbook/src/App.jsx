// App.jsx
import './App.css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;