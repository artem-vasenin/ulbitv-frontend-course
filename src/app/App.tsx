import { Suspense } from 'react';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import cls from './App.module.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback="Loading...">
        <Navbar />
        <section className={cls.content}>
          <Sidebar />
          <main className={cls.main}>
            <AppRouter />
          </main>
        </section>
      </Suspense>
    </div>
  );
};
