import React from 'react';
import classNames from 'classnames/bind';
import styles from './Food.module.scss';

const cx = classNames.bind(styles);

const Food = ({
  width = '234px',
  height = '234px',
  img,
  label,
  text = null,
  tags = [],
  flagRatio = true,
  flagDescription = true,
}) => {
  return (
    <div className={!flagDescription ? '' : cx('container')}>
      <div className={!flagRatio ? cx('food') : cx('food-ratio')} style={{ width, height }}>
        <div className={!flagRatio ? cx('block') : cx('block-ratio')}>
          <img src={img} alt="" />
          <label>{label}</label>
        </div>
      </div>
      {flagDescription && (
        <div className={cx('description')}>
          <div className={cx('text')}>{text}</div>
          <div className={cx('tags')}>
            {tags &&
              tags.map((tag, index) => {
                return <span key={index}>{tag}</span>;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Food;
