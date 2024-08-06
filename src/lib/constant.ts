import AccountIcon from '@components/icons/account';
import CallSupport from '@components/icons/call-support';
import FacebookIcon from '@components/icons/facebook';
import FastDelevery from '@components/icons/fast-delivery';
import InstagramIcon from '@components/icons/instagram';
import MoneyBack from '@components/icons/money-back';
import SearchIcon from '@components/icons/search-icon';
import SecurePayment from '@components/icons/secure-payment';
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
    href: '/sign-in',
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
export const listMainProduct = [
  {
    id: 1,
    label: 'Living Room',
    link: '',
    img: 'https://ucarecdn.com/2df20e1d-9205-4395-9666-2027672517fa/imageplaceholder12x.png'
  },
  {
    id: 2,
    label: 'Bedroom',
    link: '',
    img: 'https://ucarecdn.com/1e835bea-18d4-469f-a982-b252082485b9/bedroom.png'
  },
  {
    id: 3,
    label: 'Kitchen',
    link: '',
    img: 'https://ucarecdn.com/0238fcd0-b4c4-456a-9802-e746ad110233/sietoc.png'
  }
];
export const listArticles = [
  {
    id: 1,
    img: 'https://ucarecdn.com/a052bf04-e600-445e-a7c9-dbf6c0a4988d/imgcontainer.png',
    label: '7 ways to decor your home'
  },
  {
    id: 2,
    img: 'https://ucarecdn.com/4e3845ad-8530-4cb7-9211-a3d2cd3c744d/imgcontainer2.png',
    label: 'Kitchen organization'
  },
  {
    id: 3,
    img: 'https://ucarecdn.com/c00c23a9-e5fe-4939-a006-a90e93832a36/imgcontainer3.png',
    label: 'Decor your bedroom'
  }
];
export const listSupportCustomer = [
  {
    id: 1,
    title: 'Free Shipping',
    label: 'Order above $200',
    icon: FastDelevery
  },
  {
    id: 2,
    title: 'Money-back',
    label: '30 days guarantee',
    icon: MoneyBack
  },
  {
    id: 3,
    title: 'Secure Payments',
    label: 'Secured by Stripe',
    icon: SecurePayment
  },
  {
    id: 4,
    title: '24/7 Support',
    label: 'Phone and Email support',
    icon: CallSupport
  }
];
export const listQuotes = [
  {
    title: 'Make your workday more comfortable',
    id: 1
  },
  { title: 'Selling is about solving problems.', id: 2 },
  { title: 'Great service creates loyal customers.', id: 3 },
  { title: 'Understand needs, then offer solutions.', id: 4 },
  { title: 'Build relationships, not just sales.', id: 5 }
];
export type TestType = {
  key: string;
  text: string;
  selected: boolean;
  disabled?: boolean;
};
export const testState = [
  {
    key: 'type',
    text: 'Type',
    selected: true
  },
  {
    key: 'time',
    text: 'Time',
    selected: true,
    disabled: true
  },
  {
    key: 'username',
    text: 'Username',
    selected: true
  },
  {
    key: 'ip',
    text: 'IP address',
    selected: false
  },
  {
    key: 'operation-component',
    text: 'Operation',
    selected: true
  },
  {
    key: 'event',
    text: 'Event',
    selected: true
  },
  {
    key: 'details',
    text: 'Details',
    selected: true,
    disabled: true
  }
];
export type con = {
  key: number;
  number: number;
  label: string;
};
export const testState2 = [
  {
    key: 1,
    number: 1,
    label: '1111'
  },
  {
    key: 2,
    number: 2,
    label: '222'
  },
  {
    key: 3,
    number: 3,
    label: '333'
  }
];
