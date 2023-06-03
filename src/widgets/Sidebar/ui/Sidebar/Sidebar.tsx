import { useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import SidebarIcon from 'shared/assets/icons/Sidebar.svg';
import { BaseBtn, ThemeButton } from 'shared/ui/BaseBtn';
import cls from './Sidebar.module.scss';

export const Sidebar = ({ className }: { className?: string }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      data-testid="aside"
      className={classNames(cls.section, [className], { [cls.collapsed]: collapsed })}
    >
      <BaseBtn data-testid="aside-button" theme={ThemeButton.CLEAR} onClick={() => setCollapsed(!collapsed)}>
        <SidebarIcon className={cls.menuIcon} />
      </BaseBtn>
    </aside>
  );
};
