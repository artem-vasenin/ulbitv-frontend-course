import { useState } from 'react';

import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import SidebarIcon from 'shared/assets/icons/Sidebar.svg';
import { BaseBtn, ThemeButton } from 'shared/ui/BaseBtn';

export const Sidebar = ({ className }: { className?: string }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={classNames(cls.section, [className], {[cls.collapsed]: collapsed})}
    >
      <BaseBtn theme={ThemeButton.CLEAR} onClick={() => setCollapsed(!collapsed)}>
        <SidebarIcon className={cls.menuIcon} />
      </BaseBtn>
    </aside>
  );
};
