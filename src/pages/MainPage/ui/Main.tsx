import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('menu_item_main')}
    </div>
  );
};

export default MainPage;
