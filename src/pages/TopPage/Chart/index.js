import React from 'react';
import classNames from 'classnames/bind';
import styles from './Chart.module.scss';
import { DualAxes } from '@ant-design/plots';

const cx = classNames.bind(styles);

const data = [
  {
    hours: '6月',
    value: 14,
    count: 14,
  },
  {
    hours: '7月',
    value: 13.5,
    count: 13,
  },
  {
    hours: '8月',
    value: 13,
    count: 12,
  },
  {
    hours: '9月',
    value: 13.5,
    count: 13,
  },
  {
    hours: '10月',
    value: 12.5,
    count: 12,
  },
  {
    hours: '11月',
    value: 12,
    count: 12,
  },
  {
    hours: '12月',
    value: 13,
    count: 12.5,
  },
  {
    hours: '1月',
    value: 12,
    count: 11.5,
  },
  {
    hours: '2月',
    value: 11,
    count: 10,
  },
  {
    hours: '3月',
    value: 11.5,
    count: 11,
  },
  {
    hours: '4月',
    value: 11,
    count: 10.5,
  },
  {
    hours: '5月',
    value: 10,
    count: 9,
  },
];

const Chart = ({ height = '100%' }) => {
  const config = {
    data: [data, data],
    xField: 'hours',
    yField: ['value', 'count'],
    Axis: {
      grid: {
        line: {
          style: {
            stroke: '#ccc',
            lineWidth: 1,
            lineDash: [0, 0],
            strokeOpacity: 1,
            shadowColor: 'none',
            cursor: 'pointer',
          },
          top: true,
        },
      },
      tickLine: {
        grid: null,
      },
    },

    geometryOptions: [
      {
        geometry: 'line',
        color: '#FFCC21',
        point: {
          shape: 'circle',
        },
        lineStyle: {
          lineWidth: 2,
          opacity: 1,
        },
      },
      {
        geometry: 'line',
        color: '#8FE9D0',
        point: {
          shape: 'circle',
        },
        lineStyle: {
          lineWidth: 2,
          opacity: 1,
        },
      },
    ],
  };
  return (
    <DualAxes
      style={{ backgroundColor: '#414141', height: height, width: '100%', padding: '0 16px 8px' }}
      {...config}
    />
  );
};

export default Chart;
