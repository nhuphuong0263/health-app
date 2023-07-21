import React from 'react';
import classNames from 'classnames/bind';
import styles from './LoadMoreButton.module.scss';

const cx = classNames.bind(styles);

export const LoadMoreButton = ({ text = '記録をもっと見る' }) => {
  return (
    <div className={cx('load-more-button')}>
      <button>{text}</button>
    </div>
  );
};
