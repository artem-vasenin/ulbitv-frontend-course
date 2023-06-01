import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

export const PageError = () => {
  const { t } = useTranslation();

  const onReload = () => {
    location.reload();
  };

  return (
    <div className={cls.section}>
      <p className={cls.text}>{t('strange_error')}</p>
      <button
        type="button"
        onClick={onReload}
        className={cls.btn}
      >
        {t('reload_page')}
      </button>
    </div>
  );
};
