import LoaderIcon from 'shared/assets/icons/Loader.svg';
import cls from './Loader.module.scss';

export const Loader = () => (
  <div className={cls.section}>
    <LoaderIcon className={cls.icon} />
  </div>
);
