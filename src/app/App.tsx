import { Link } from 'react-router-dom';
import { AppRouter } from './providers/router';

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
      <AppRouter/>
    </div>
  );
};

export default App;
