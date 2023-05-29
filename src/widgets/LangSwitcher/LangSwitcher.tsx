import i18n from 'i18next';
import { BaseBtn, ThemeButton } from 'shared/ui/BaseBtn';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './LangSwitcher.module.scss';

export const LangSwitcher = ({ className }: { className?: string }) => (
  <BaseBtn
    onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
    theme={ThemeButton.CLEAR}
    className={classNames(cls.btn, [className])}
  >
    {i18n.language === 'ru' ? 'EN' : 'РУ'}
  </BaseBtn>
);
