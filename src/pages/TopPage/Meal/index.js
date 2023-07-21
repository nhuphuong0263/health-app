import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Meal.module.scss';

const cx = classNames.bind(styles);

const Meal = ({ icon, label }) => {
  return (
    <figure className={cx('item')}>
      <img src={images.optionsItem} alt="" />
      <div className={cx('block')}>
        {icon}
        <label>{label}</label>
      </div>
    </figure>
  );
};

export default Meal;
