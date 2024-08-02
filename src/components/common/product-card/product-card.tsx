import React from 'react';
import Badge from '@common/badge/badge';
import WhishButton from '@common/whish-btn/wish-button';
import StarIcon from '@components/icons/star';
import { Button } from '@components/ui/button';
import { inter } from '@lib/fonts';
import { cn, formatVnd } from '@lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import styles from './product-card.module.scss';

type ProductCardProps = {
  name: string;
  price: number;
  discount?: number;
  rating: number;
  isNew?: boolean;
  imgProduct: string;
  href: string;
  handleAddToFavarite?: () => void;
  handleAddToCart?: () => void;
};

const ProductCard: React.FC<ProductCardProps> = props => {
  const { name, price, discount, rating, isNew, imgProduct, href, handleAddToFavarite, handleAddToCart } = props;
  return (
    <section className={styles.productCardWrapper}>
      <Link
        href={{
          pathname: href
        }}
        className='product-image relative'
      >
        <Image alt={name} src={imgProduct} fill />
        <Button className='add-cart_btn hover:!bg-primary_blur' onClick={handleAddToCart}>
          Add to cart
        </Button>
        <div className='product-label'>
          <div className='flex flex-col gap-y-2'>
            {isNew && <Badge label='NEW' />}
            {discount && <Badge className='text-neutral_00 bg-[#38CB89]' label={`${discount}%`} />}
          </div>
          <WhishButton className='text-neutral_04' handleClick={handleAddToFavarite} />
        </div>
      </Link>
      <div className='product-infor'>
        <StarIcon numberStars={rating} />
        <p className={cn('product-infor_name', inter.className)}>{name}</p>
        <div className='product-infor_price'>
          {discount && <span>{formatVnd((price * (100 - discount)) / 100)}</span>}
          <span className={cn(inter.className, discount ? 'discount-price' : '')}>{formatVnd(price)}</span>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
