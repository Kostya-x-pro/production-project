import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss';

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toglle Theme</button>
      <Link to="/">Главная страница</Link>
      <Link to="/about">О сайте</Link>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/' element={<MainPage/>} />
          </Routes>
        </Suspense>
    </div>
  );
};

export default App;
