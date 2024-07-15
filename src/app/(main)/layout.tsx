import React from 'react';
import Header from '@common/header/header';
import Footer from '@common/footer/footer';
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
