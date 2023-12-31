import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default DefaultLayout;
