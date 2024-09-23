import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';

import { useTheme } from './theme/useTheme';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/Mainpage/MainPage.async';

import './styles/index.scss';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const {theme, toggleTheme} = useTheme();
  const bool = true;

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toglle Theme</button>
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
