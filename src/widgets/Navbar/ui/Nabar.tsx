import cls from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames as cx } from 'shared/lib/classNames/classNames';

export const Navbar = ({ className }: { className?: string }) => {
  const { toggleTheme } = useTheme();

  return (
    <nav className={cx(cls.section, [className])}>
      <div className={cx('container', [cls.row])}>
        <div className={cx(cls.col, [cls.colLeft])}>
          <button onClick={toggleTheme}>Theme</button>
        </div>
        <div className={cx(cls.col, [cls.colRight])}>
          <ul className={cls.ul}>
            <li className={cls.li}>
              <Link to={'/'}>Home</Link>
            </li>
            <li className={cls.li}>
              <Link to={'/about'}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
