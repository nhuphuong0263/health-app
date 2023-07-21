import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('wrapper')}>
      <ul className={cx('navbar')}>
        <li className={cx('navbar-item')}>
          <a href="#" alt="">
            会員登録
          </a>
        </li>
        <li className={cx('navbar-item')}>
          <a href="#" alt="">
            運営会社
          </a>
        </li>
        <li className={cx('navbar-item')}>
          <a href="#" alt="">
            利用規約
          </a>
        </li>
        <li className={cx('navbar-item')}>
          <a href="#" alt="">
            個人情報の取扱について
          </a>
        </li>
        <li className={cx('navbar-item')}>
          <a href="#" alt="">
            特定商取引法に基づく表記
          </a>
        </li>
        <li className={cx('navbar-item')}>
          <a href="#" alt="">
            お問い合わせ
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
