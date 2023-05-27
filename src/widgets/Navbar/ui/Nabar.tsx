import { Link } from 'react-router-dom';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames as cx } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

export const Navbar = ({ className }: { className?: string }) => {

  return (
    <nav className={cx(cls.section, [className])}>
      <div className={cx('container', [cls.row])}>
        <ThemeSwitcher className={cls.themeSwitcher} />
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
