import { Link } from 'react-router-dom';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames as cx } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Navbar.module.scss';

export const Navbar = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <nav className={cx(cls.section, [className])}>
      <div className={cx('container', [cls.row])}>
        <div className={cx(cls.col, [cls.colLeft])}>
          <ThemeSwitcher className={cls.themeSwitcher} btnClassName={cls.themeSwitcherBtn} />
          <LangSwitcher className={cls.themeSwitcher} />
        </div>
        <div className={cx(cls.col, [cls.colRight])}>
          <ul className={cls.ul}>
            <li className={cls.li}>
              <Link to="/">{t('menu_item_main')}</Link>
            </li>
            <li className={cls.li}>
              <Link to="/about">{t('menu_item_about')}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
