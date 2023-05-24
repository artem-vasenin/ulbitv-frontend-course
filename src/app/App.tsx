import { Link } from 'react-router-dom';

import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <div>
        <Link to={'/'}>Home</Link>
      </div>
      <div>
        <Link to={'/about'}>About</Link>
      </div>

      <button onClick={toggleTheme}>Theme</button>

      <AppRouter />
    </div>
  );
};
