import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './MenuDropDown.module.scss';
import { MenuIcon, CloseMenuIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const menuData = [
  { title: '自分の記録' },
  { title: '体重グラフ' },
  { title: '目標' },
  { title: '選択中のコース' },
  { title: 'コラム一覧' },
  { title: '設定' },
];

const MenuDropDown = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(menuData);
  }, []);

  const onToggleMenu = (e) => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className={cx('menu-button')} onClick={onToggleMenu}>
      {!isOpenMenu ? <MenuIcon /> : <CloseMenuIcon />}
      {isOpenMenu && (
        <div className={cx('drawr-menu')}>
          <ul>
            {menus &&
              menus.map((menu, index) => {
                return (
                  <li
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}>
                    <a href="#" alt="" onClick={(e) => console.log(e)}>
                      {menu.title}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuDropDown;
