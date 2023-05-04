import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { MainPage } from './pages';
import { useTheme } from './theme/useTheme';
import { AboutPageAsync } from './pages/About';
import { CounterPageAsync } from './pages/Counter';
import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <div>
        <Link to={'/'}>Home</Link>
      </div>
      <div>
        <Link to={'/about'}>About</Link>
      </div>
      <div>
        <Link to={'counter'}>Counter</Link>
      </div>

      <button onClick={toggleTheme}>Theme</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync/>}/>
          <Route path={'/counter'} element={<CounterPageAsync/>}/>
          <Route path={'/'} element={<MainPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};
