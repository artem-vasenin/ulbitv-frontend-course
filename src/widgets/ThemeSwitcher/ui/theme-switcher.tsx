import Sun from 'shared/assets/icons/sun.svg';
import { useTheme } from 'app/providers/ThemeProvider';
import { BaseBtn, ThemeButton } from 'shared/ui/BaseBtn';
import { classNames as cx } from 'shared/lib/classNames/classNames';
import cls from './theme-twitcher.module.scss';

interface Props {
  className?: string;
  btnClassName?: string;
}

export const ThemeSwitcher = ({ className, btnClassName }: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cx(cls.wrapper, [className])}>
      <BaseBtn
        className={cx(cls.btn, [btnClassName])}
        onClick={toggleTheme}
        theme={ThemeButton.CLEAR}
      >
        <Sun className={cls.icon} />
      </BaseBtn>
    </div>
  );
};
