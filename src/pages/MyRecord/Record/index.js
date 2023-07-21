import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Record.module.scss';

const cx = classNames.bind(styles);

const Record = forwardRef(({ img, title, label, smoothScroll }, ref) => {
  return (
    <div className={cx('record')} onClick={() => smoothScroll(ref)}>
      <div className={cx('block')}>
        <img src={img} alt="" />
        <div className={cx('content')}>
          <h4>{title}</h4>
          <label>{label}</label>
        </div>
      </div>
    </div>
  );
});

export default Record;
