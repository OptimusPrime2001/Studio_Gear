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
export const listSlider = [
  {
    id: 0,
    img: 'https://ucarecdn.com/fb7e4de7-3533-42f8-b153-fc95a73a15ef/Pasteimage.png'
  },
  {
    id: 1,
    img: 'https://ucarecdn.com/725f3667-bf23-446c-a51b-29b3f53bc700/PasteImage2.png'
  },
  {
    id: 2,
    img: 'https://ucarecdn.com/9c71eb65-0dc3-46a3-ba67-1ab8e2533e08/292184212_586036499545848_5535349302586193547_n.jpg'
  },
  {
    id: 3,
    img: 'https://ucarecdn.com/f0e41f40-7fe9-4e97-9cc5-7b4f333cb7e6/image_2023_03_28T14_00_17_383Z.png'
  }
];
