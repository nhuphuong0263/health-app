import React from 'react';
import classNames from 'classnames/bind';
import styles from './Recommended.module.scss';

const cx = classNames.bind(styles);

const Recommended = ({ title, text }) => {
  return (
    <div className={cx('item')}>
      <div className={cx('box')}>
        <div className={cx('title')}>{title}</div>
        <div className={cx('line')} />
        <div className={cx('text')}>{text}</div>
      </div>
    </div>
  );
};

export default Recommended;
