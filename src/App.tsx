import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { MainPage } from './pages';
import { AboutPageAsync } from './pages/About';
import { CounterPageAsync } from './pages/Counter';
import './index.scss';

export const App = () => {
  return (
    <div className="app">
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'counter'}>Counter</Link>
        </li>
      </ul>

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
