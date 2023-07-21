import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const MenuItem = ({ title, to, icon }) => {
  return (
    <NavLink
      className={(nav) => {
        return cx('nav-item', { active: nav.isActive });
      }}
      to={to}>
      <span className={cx('icon')}>
        {icon}
        {to === '/collumnpage' ? <span className={cx('num')}>1</span> : undefined}
      </span>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default MenuItem;
