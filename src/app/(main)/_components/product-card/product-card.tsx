import React from 'react';
import { Button } from '@components/ui/button';
import Image from 'next/image';
import styles from './product-card.module.scss';

type ProductCardProps = {
  name: string;
  price;
  discount?;
  ratting?: number;
  isNew?: boolean;
  imgProduct?: string;
  href?: string;
  handleAddToFavarite?;
  handleAddToCart?: () => void;
};

const ProductCard: React.FC<ProductCardProps> = props => {
  const { name, price, discount, ratting, isNew, imgProduct, href, handleAddToFavarite, handleAddToCart } = props;
  return (
    <section className={styles.productCardWrapper}>
      <div className='product-image'>
        <Image alt={name} src={href} fill />
        <Button onClick={handleAddToCart}>Add to cart</Button>
        <div></div>
      </div>
      <div className='product-info'>
        <p className='product-infor_name'>{name}</p>
        <div>
          <span>{Array(ratting).map(item =>())}</span>
          <span>{price}</span>
          <span>{(price * (discount / 100)).toFixed()}</span>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
