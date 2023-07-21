import React from 'react';
import classNames from 'classnames/bind';
import styles from './Exercise.module.scss';

const cx = classNames.bind(styles);

const Exercise = ({ title, kcal, time }) => {
  return (
    <li className={cx('block')}>
      <div className={cx('title-kcal')}>
        <div className={cx('title')}>{title}</div>
        <div className={cx('kcal')}>{kcal}</div>
      </div>
      <div className={cx('time')}>{time}</div>
    </li>
  );
};

export default Exercise;
