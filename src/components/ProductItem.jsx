import React from 'react';
import styles from '../styles/ProductItem.module.css';

const ProductItem = ({
  price,
  imageSrc,
  imageAlt,
  title,
  description,
  borderColor,
}) => (
  <div className={styles.productItem}>
    <div className={styles.productPrice}>{price}</div>
    <div className={styles.productItemContainer}>
      <div className={styles.productImage}>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className={styles.productCopy}>
        <h3 style={{borderBottomColor: borderColor}} className={styles.productTitle}>{title}</h3>
        <p className={styles.productDescription}>{description}</p>
      </div>
    </div>
  </div>
);

export default ProductItem;