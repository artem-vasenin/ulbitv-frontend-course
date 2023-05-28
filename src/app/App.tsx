import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import cls from './App.module.scss';

const Tmp = () => {
  const {t, i18n} = useTranslation();

  return (
    <div>
      <button onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}>
        {t('lang_btn_text')}
      </button>
      <p>{t('test_text')}</p>
    </div>
  );
}

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback="Loading...">
        <Navbar />
        <section className={cls.content}>
          <Sidebar />
          <main className={cls.main}>
            <Tmp />
            <AppRouter />
          </main>
        </section>
      </Suspense>
    </div>
  );
};
