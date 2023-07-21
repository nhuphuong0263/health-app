import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CircleProgressBar.module.scss';

const cx = classNames.bind(styles);

const CircleProgressBar = ({ strokeWidth, percentage }) => {
  const radius = 50 - strokeWidth / 2;
  const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

  const diameter = Math.PI * 2 * radius;
  const progressStyle = {
    stroke: '#fff',
    fill: '#FFF',
    filter: 'drop-shadow(0px 0px 6px #FC7400)',
    strokeLinecap: 'round',
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - percentage) / 100) * diameter}px`,
  };

  return (
    <svg className={cx('CircularProgressbar')} viewBox="0 0 100 100" width={100} height={100}>
      <path
        className={cx('CircularProgressbar-trail')}
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={{
          stroke: 'transparent',
        }}
      />

      <path
        className={cx('CircularProgressbar-path')}
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={progressStyle}
      />

      <text
        className={cx('CircularProgressbar-text')}
        x={30}
        y={54}
        style={{
          fill: '#fff',
          fill: '#FFF',
          filter: 'drop-shadow(0px 0px 6px #FC7400)',
          fontSize: '12px',
          dominantBaseline: 'central',
          textAnchor: 'middle',
        }}>
        05 / 21
      </text>

      <text
        className={cx('CircularProgressbar-text')}
        x={70}
        y={50}
        style={{
          fill: '#fff',
          fill: '#FFF',
          filter: 'drop-shadow(0px 0px 6px #FC7400)',
          fontSize: '20px',
          dominantBaseline: 'central',
          textAnchor: 'middle',
        }}>
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export default CircleProgressBar;
