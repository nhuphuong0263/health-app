import React, { useState, useEffect } from 'react';
import styles from './UpIconButon.module.scss';
import classNames from 'classnames/bind';
import { UpIconBtn } from '~/components/Icons';

const cx = classNames.bind(styles);

export const UpIconButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleVisibility = () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const initialScrollPosition = window.pageYOffset;
    setScrollPosition(initialScrollPosition);

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('load', toggleVisibility);
    window.addEventListener('resize', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('load', toggleVisibility);
      window.removeEventListener('resize', toggleVisibility);
    };
  }, []);

  return (
    <div className={cx('up-button')}>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
        <UpIconBtn />
      </button>
    </div>
  );
};
