import cls from './About.module.scss';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={cls.section}>
      {t('menu_item_about')}
    </div>
  );
};

export default About;
