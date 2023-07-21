import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './MyRecord.module.scss';
import images from '~/assets/images';
import Record from './Record';
import Chart from '../TopPage/Chart';
import Exercise from './Exercise';
import TitleDateInfo from './TitleDateInfo';
import MyDairy from './MyDairy';
import { LoadMoreButton, UpIconButton } from '~/components/Buttons';
import useFetch from '~/hooks/useFetch';

const cx = classNames.bind(styles);

const recordsData = [
  { img: images.myRecords, title: 'BODY RECORD', label: '自分のカラダの記録' },
  { img: images.myExercise, title: 'MY EXERCISE', label: '自分の運動の記録' },
  { img: images.myDiary, title: 'MY DIARY', label: '自分の日記' },
];

const tabs = ['日', '週', '月', '年'];

const MyRecord = () => {
  const [records, setRecords] = useState([]);
  const {
    data: exercisesData,
    error: exerciseError,
    isLoading: exerciseIsLoading,
  } = useFetch('http://localhost:3000/exercise');
  const {
    data: diariesData,
    error: diariesError,
    isLoading: diariesIsLoading,
  } = useFetch('http://localhost:3000/diaries');
  const [type, setType] = useState(tabs[0]);

  const bodyRecordRef = useRef();
  const myExerciseRef = useRef();
  const myDairyRef = useRef();

  useEffect(() => {
    let recordRefData = recordsData.map((record) => ({
      ...record,
      ref:
        record.title === 'BODY RECORD'
          ? bodyRecordRef
          : record.title === 'MY EXERCISE'
          ? myExerciseRef
          : myDairyRef,
    }));
    setRecords(recordRefData);
  }, []);

  const smoothScroll = (ref) => {
    const target = ref.current;
    if (target) {
      const { top } = target.getBoundingClientRect();
      window.scrollTo({
        top: top + window.pageYOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('records')}>
          {records.map((record, index) => {
            return (
              <Record
                key={index}
                {...record}
                ref={record.ref}
                smoothScroll={() => smoothScroll(record.ref)}
              />
            );
          })}
        </div>

        <div ref={bodyRecordRef} className={cx('chart')}>
          <TitleDateInfo title={'Body Record'} date={'2021.05.21'} />
          <Chart height={'calc(100% - 92px)'} />
          <div className={cx('tabs-container')}>
            {tabs.map((tab) => {
              return (
                <button
                  className={cx('tab-btn')}
                  style={
                    type === tab
                      ? { backgroundColor: '#FFCC21', color: '#fff' }
                      : { backgroundColor: '#fff', color: '#FFCC21' }
                  }
                  key={tab}
                  onClick={() => setType(tab)}>
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div ref={myExerciseRef} className={cx('exercise')}>
          <TitleDateInfo title={'My exercise'} date={'2021.05.21'} />
          <ul id="scroll-custom" className={cx('table')}>
            {exerciseIsLoading && <div>Loading...</div>}
            {exerciseError && <div>Error: {exerciseError.message}</div>}
            {exercisesData.length > 0 &&
              exercisesData.map((exe, index) => {
                return <Exercise key={index} {...exe} />;
              })}
          </ul>
        </div>

        <div ref={myDairyRef} className={cx('my-dairy')}>
          <h3>My dairy</h3>
          <div className={cx('wrapper')}>
            {diariesIsLoading && <div>Loading...</div>}
            {diariesError && <div>Error: {diariesError.message}</div>}
            {diariesData.map((diary, index) => {
              return (
                <MyDairy key={index} dateTimes={diary.dateTimes} description={diary.description} />
              );
            })}
          </div>
        </div>

        <LoadMoreButton text="自分の日記をもっと見る" />
      </div>
    </div>
  );
};

export default MyRecord;
