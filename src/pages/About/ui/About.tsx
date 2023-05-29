import { useTranslation } from 'react-i18next';
import cls from './About.module.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={cls.section}>
      {t('menu_item_about')}
    </div>
  );
};

export default About;
