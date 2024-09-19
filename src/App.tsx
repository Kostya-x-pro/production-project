import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';
// import Counter from './components/Counter';
// import AboutPage from './pages/AboutPage/AboutPage';
// import MainPage from './pages/Mainpage/MainPage';


import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/Mainpage/MainPage.async';

import './index.scss';

const App = () => {
  return (
    <div className="app">
      <Link to="/">Главная страница</Link>
      <Link to="/about">О сайте</Link>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/about' element={<AboutPageAsync/>} />
            <Route path='/' element={<MainPageAsync/>} />
          </Routes>
        </Suspense>
    </div>
  );
};

export default App;
