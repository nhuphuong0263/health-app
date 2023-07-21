import React from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { ChallengeIcon, InfoIcon, MemoIcon } from '~/components/Icons';
import MenuDropDown from './MenuDropDown';

const cx = classNames.bind(styles);

const Navbar = () => {
  return (
    <div className={cx('wrapper')}>
      <Menu>
        <MenuItem title="自分の記録" to={config.routes.topPage} icon={<MemoIcon />} />
        <MenuItem title="チャレンジ" to={config.routes.myRecord} icon={<ChallengeIcon />} />
        <MenuItem title="お知らせ" to={config.routes.collumnPage} icon={<InfoIcon />} />
      </Menu>

      <MenuDropDown />
    </div>
  );
};

export default Navbar;
