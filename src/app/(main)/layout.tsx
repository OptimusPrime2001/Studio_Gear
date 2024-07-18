import React from 'react';
import Footer from '@common/footer/footer';
import Header from '@common/header/header';
import NotificationBar from '@common/notification-bar/notification-bar';

const MainLyout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NotificationBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLyout;
