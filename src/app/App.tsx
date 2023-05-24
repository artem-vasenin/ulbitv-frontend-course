import { Navbar } from 'widgets/Navbar';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <main className="container">
        <AppRouter />
      </main>
    </div>
  );
};
