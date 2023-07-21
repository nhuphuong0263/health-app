import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './TopPage.module.scss';
import images from '~/assets/images';

import { MorningIcon, SnackIcon } from '~/components/Icons';
import Chart from './Chart';
import Meal from './Meal';
import Food from '../../components/Food';
import { LoadMoreButton } from '~/components/Buttons';
import { FLAG_FOOD_DESCRTION, FLAG_IMAGE_RATIO } from '~/utils';
import useFetch from '~/hooks/useFetch';
import CircleProgressBar from '~/components/CircleProgressBar';

const cx = classNames.bind(styles);

const optionsData = [
  { icon: <MorningIcon />, label: 'Morning' },
  { icon: <MorningIcon />, label: 'Lunch' },
  { icon: <MorningIcon />, label: 'Dinner' },
  { icon: <SnackIcon />, label: 'Snack' },
];

const TopPage = () => {
  const [options, setOptions] = useState([]);
  const {
    data: foodsData,
    error: foodsError,
    isLoading: foodsIsLoading,
  } = useFetch('http://localhost:3000/foodsTopPage');

  useEffect(() => {
    setOptions(optionsData);
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('top')}>
          <figure className={cx('banner')}>
            <img src={images.bannerHome} alt="banner home image" />
            <CircleProgressBar strokeWidth={2} percentage={75} />
          </figure>
          <div className={cx('chart')}>
            <Chart />
          </div>
        </div>
        <div className={cx('meals')}>
          <div className={cx('inner')}>
            <div className={cx('options')}>
              {options.map((dt, index) => {
                return <Meal key={index} {...dt} />;
              })}
            </div>

            <div className={cx('foods')}>
              <div className={cx('wrapper')}>
                {foodsIsLoading && <div>Loading...</div>}
                {foodsError && <div>Error: {foodsError.message}</div>}
                {foodsData.map((food, index) => {
                  return (
                    <Food
                      key={index}
                      img={food.img}
                      label={food.label}
                      flagRatio={FLAG_IMAGE_RATIO}
                      flagDescription={FLAG_FOOD_DESCRTION}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <LoadMoreButton />
        </div>
      </div>
    </div>
  );
};

export default TopPage;
