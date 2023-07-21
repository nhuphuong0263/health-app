import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CollumnPage.module.scss';
import { LoadMoreButton, UpIconButton } from '~/components/Buttons';
import Recommended from './Recommended';
import Food from '~/components/Food';
import useFetch from '~/hooks/useFetch';

const cx = classNames.bind(styles);

const CollumPage = () => {
  const {
    data: foodsData,
    error: foodsError,
    isLoading: foodsIsLoading,
  } = useFetch('http://localhost:3000/foods');
  const {
    data: recommendedsData,
    error: recommendedsError,
    isLoading: recommendedsIsLoading,
  } = useFetch('http://localhost:3000/recommended');

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('recommended')}>
          {recommendedsIsLoading && <div>Loading...</div>}
          {recommendedsError && <div>Error: {recommendedsError.message}</div>}
          {recommendedsData.map((recommended, index) => {
            return <Recommended key={index} {...recommended} />;
          })}
        </div>

        <div className={cx('foods')}>
          <div className={cx('wrapper')}>
            {foodsIsLoading && <div>Loading...</div>}
            {foodsError && <div>Error: {foodsError.message}</div>}
            {foodsData.map((food, index) => {
              return <Food width={234} height={'144.47px'} key={index} {...food} />;
            })}
          </div>

          {/* <UpIconButton style={{ bottom: 16 }} /> */}
        </div>

        <LoadMoreButton text="コラムをもっと見る" />
      </div>
    </div>
  );
};

export default CollumPage;
