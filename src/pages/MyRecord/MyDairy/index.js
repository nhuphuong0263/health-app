import React from 'react';
import classNames from 'classnames/bind';
import styles from './MyDiary.module.scss';
import { convertDescriptionToHTML, splitDateTime } from '~/utils';

const cx = classNames.bind(styles);

const MyDiary = ({ dateTimes, description }) => {
  const splittedDateTime = splitDateTime(dateTimes);
  const htmlDescription = convertDescriptionToHTML(description);

  return (
    <div className={cx('item')}>
      <div className={cx('date')}>{splittedDateTime.date}</div>
      <div className={cx('time')}>{splittedDateTime.time}</div>
      <div className={cx('description')} dangerouslySetInnerHTML={{ __html: htmlDescription }} />
    </div>
  );
};

export default MyDiary;
