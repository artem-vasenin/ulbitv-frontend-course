import { Suspense } from 'react';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Loader } from 'shared/ui/Loader';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './App.module.scss';
import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback={<Loader />}>
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
