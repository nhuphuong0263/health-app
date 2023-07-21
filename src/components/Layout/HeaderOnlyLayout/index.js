import React from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderOnlyLayout.module.scss';

import Header from './Header';
import Footer from './Footer';
import { UpIconButton } from '~/components/Buttons';

const cx = classNames.bind(styles);

const HeaderOnlyLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>{children}</div>
      <Footer />
      <UpIconButton />
    </div>
  );
};

export default HeaderOnlyLayout;
