import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { BaseBtn, ThemeButton } from 'shared/ui/BaseBtn';
import SidebarIcon from 'shared/assets/icons/Sidebar.svg';
import MenuHomeIcon from 'shared/assets/icons/home.svg';
import MenuAboutIcon from 'shared/assets/icons/about.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';

export const Sidebar = ({ className }: { className?: string }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  return (
    <aside
      data-testid="aside"
      className={classNames(cls.section, [className], { [cls.collapsed]: collapsed })}
    >
      <BaseBtn data-testid="aside-button" theme={ThemeButton.CLEAR} onClick={() => setCollapsed(!collapsed)}>
        <SidebarIcon className={cls.menuIcon} />
      </BaseBtn>

      <ul className={cls.ul}>
        <li className={cls.li}>
          <Link to="/">
            <span className={cls.menuItemIconBlock}>
              <MenuHomeIcon className={cls.menuItemIcon} />
            </span>
            <span className={cls.menuItemText}>{t('menu_item_main')}</span>
          </Link>
        </li>
        <li className={cls.li}>
          <Link to="/about">
            <span className={cls.menuItemIconBlock}>
              <MenuAboutIcon className={cls.menuItemIcon} />
            </span>
            <span className={cls.menuItemText}>{t('menu_item_about')}</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
