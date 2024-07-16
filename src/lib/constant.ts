import AccountIcon from '@components/icons/account';
import FacebookIcon from '@components/icons/facebook';
import InstagramIcon from '@components/icons/instagram';
import SearchIcon from '@components/icons/search-icon';
import ShoppingBag from '@components/icons/shopping-bag';
import YoutubeIcon from '@components/icons/youtube';

export const navigationLink = [
  { id: 'home', label: 'Trang chủ', href: '/' },
  { id: 'shop', label: 'Cửa hàng', href: '/shop' },
  { id: 'product', label: 'Sản phẩm', href: '/product' },
  { id: 'contact', label: 'Liên hệ', href: '/contact' }
];
export const navigationIcon = [
  {
    id: 'search',
    label: 'Tìm kiếm',
    Component: SearchIcon
  },
  {
    id: 'account',
    label: 'Tài khoản',
    Component: AccountIcon
  },
  {
    id: 'bag',
    label: 'Giỏ hàng',
    Component: ShoppingBag
  }
];
export const listSocialIcon = [
  {
    id: 'instagram',
    href: '/instagram',
    Component: InstagramIcon
  },
  {
    id: 'facebook',
    href: '/facebook',
    Component: FacebookIcon
  },
  {
    id: 'youtube',
    href: '/youtube',
    Component: YoutubeIcon
  }
];
