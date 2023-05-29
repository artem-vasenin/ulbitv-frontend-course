import { ButtonHTMLAttributes, FC } from 'react';

import { classNames as cx } from 'shared/lib/classNames/classNames';
import cls from './BaseBtn.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ThemeButton;
}

export const BaseBtn: FC<ButtonProps> = (props) => {
  const { className, theme, ...rest } = props;

  return (
    <button
      type="button"
      className={cx(cls.btn, [className, cls[theme]])}
      {...rest}
    >
      {props.children}
    </button>
  );
};
