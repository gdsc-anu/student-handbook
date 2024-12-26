import './App.css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import HomePage from './components/HomePage';
import CustomCarousel from "./components/Carousel"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path="/" element={<CustomCarousel />} />
        <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
}

export default App;