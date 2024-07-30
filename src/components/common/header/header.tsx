'use client';
import React from 'react';
import Logo from '@common/logo/logo';
import AccountIcon from '@components/icons/account';
import CloseIcon from '@components/icons/close';
import HeartIcon from '@components/icons/heart';
import MenuBars from '@components/icons/menu-bars';
import SearchIcon from '@components/icons/search-icon';
import ShoppingBag from '@components/icons/shopping-bag';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@components/ui/sheet';
import { listSocialIcon, navigationLink } from '@lib/constant';
import { cn } from '@lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CountIcon from '../count-icon/count-icon';
import { ModeToggle } from '../mode-toggle/mode-toggle';
import styles from './header.module.scss';

const Header = () => {
  const pathname = usePathname();
  const [openMenuMobile, setOpenMenuMobile] = React.useState<boolean>(false);
  const checkMenuActive = (label: string) => {
    return pathname === label ? 'menu_active' : 'menu_link';
  };
  const handleSignIn = () => {};
  return (
    <header className={cn(styles.headerWrapper, 'iu-d-flexbetween media_width_sm')}>
      <section className='iu-d-flexcenter header-logo gap-x-2'>
        <Sheet open={openMenuMobile} onOpenChange={setOpenMenuMobile}>
          <SheetTrigger>
            <MenuBars />
          </SheetTrigger>
          <SheetContent datatype='menu_mobile' side='left' className={cn('w-[90%] ipadair:hidden', styles.menu_mobile)}>
            <SheetHeader className='h-full'>
              <SheetTitle className='menu_mobile-header'>
                <Logo />
                <CloseIcon onClick={() => setOpenMenuMobile(false)} />
              </SheetTitle>
              <section className='menu_mobile-content'>
                <section className='w-full'>
                  <div className='menu_search'>
                    <SearchIcon />
                    <Input type='search' placeholder='Search' />
                  </div>
                  <ul>
                    {navigationLink.map(item => (
                      <li key={item.id}>
                        <Link className={cn(checkMenuActive(item.href), 'dark:text-white')} href={item.href}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
                <section className='iu-d-flexcolumn w-full gap-y-5'>
                  <ul className='w-full'>
                    <li className='iu-d-flexbetween dark:text-white'>
                      <Link href='cart'>Giỏ hàng</Link>
                      <CountIcon count={3} iconElement={<ShoppingBag />} />
                    </li>
                    <li className='iu-d-flexbetween dark:text-white'>
                      <Link href='whish-list'>Mục yêu thích</Link>
                      <CountIcon count={3} iconElement={<HeartIcon size='24' />} />
                    </li>
                  </ul>
                  <Button className='sign-btn w-full hover:!bg-primary_blur' onClick={handleSignIn}>
                    Đăng nhập
                  </Button>
                  <div className='list_social'>
                    {listSocialIcon.map(item => (
                      <Link href={item.href} key={item.id}>
                        <item.Component />
                      </Link>
                    ))}
                  </div>
                </section>
              </section>
              <SheetDescription>Shopping is not just buying things, it&apos;s an experience.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Logo />
      </section>
      <ul className='iu-d-flexbetween hidden md:gap-x-6 xl:gap-x-10'>
        {navigationLink.map(item => (
          <li key={item.id}>
            <Link className={checkMenuActive(item.href)} href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <section className='iu-d-flexbetween relative cursor-pointer gap-x-4'>
        <SearchIcon />
        <Link href={'/sign-in'}>
          <AccountIcon className='hidden md:block' />
        </Link>
        <Link href={'/cart'} className='iu-d-flexbetween gap-x-1'>
          <CountIcon count={3} iconElement={<ShoppingBag />} />
        </Link>
        <ModeToggle />
      </section>
    </header>
  );
};

export default Header;
