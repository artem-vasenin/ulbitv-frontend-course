import cls from './theme-twitcher.module.scss';
import { classNames as cx } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import Sun from 'shared/assets/icons/sun.svg';
import { BaseBtn, ThemeButton } from 'shared/ui/BaseBtn';

export const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cx(cls.wrapper, [className])}>
      <BaseBtn
        className={cls.btn}
        onClick={toggleTheme}
        theme={ThemeButton.CLEAR}
      >
        <Sun className={cls.icon}/>
      </BaseBtn>
    </div>
  );
};
