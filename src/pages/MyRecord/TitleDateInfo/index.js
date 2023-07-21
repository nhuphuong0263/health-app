import React from 'react';
import classNames from 'classnames/bind';
import styles from './TitleDateInfo.module.scss';

const cx = classNames.bind(styles);

const TitleDateInfo = ({ title, date }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>{title}</div>
      <div className={cx('date')}>{date}</div>
    </div>
  );
};

export default TitleDateInfo;
