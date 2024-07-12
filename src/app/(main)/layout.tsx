import React from 'react';
import Header from './_components/header/header';
import Footer from './_components/footer/footer';
import NotificationBar from './_components/notification-bar/notification-bar';

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
