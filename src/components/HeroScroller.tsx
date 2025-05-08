'use client';

import { useRef } from 'react';
import styles from '../styles/HeroScroller.module.css'; // ✅ updated path

const HeroScroller: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
      if (ref.current && containerRef.current) {
        containerRef.current.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth',
        });
      }
    };

  return (
    <div>
      <div className={styles.controls}>
        <button onClick={() => scrollTo(homeRef)}>Home</button>
        <button onClick={() => scrollTo(productsRef)}>Products</button>
        <button onClick={() => scrollTo(aboutRef)}>About</button>
      </div>

      <div className={styles.heroScrollerContainer}>
        <div className={styles.heroContainer} ref={containerRef}>
          <div className={styles.imageSection} ref={homeRef}>
            <img src="/images/home.jpg" alt="Home" />
          </div>
          <div className={styles.productSection} ref={productsRef}>
            <h2>PRODUCTS</h2>
            <div className={styles.productList}>
              <div className={styles.productItem}>
              <div className={styles.productItemContainer}>
                <div className={styles.productImage}>
                  <img src="/images/products/peppermint.png" alt="Peppermint" />
                </div>
                <div className={styles.productCopy}>
                  <h3 className={styles.productTitle}>Peppermint</h3>
                  <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                </div>
              </div>
              <div className={styles.productItem}>
              <div className={styles.productItemContainer}>
                <div className={styles.productImage}>
                  <img src="/images/products/spearmint.png" alt="Spearmint" />
                </div>
                <div className={styles.productCopy}>
                  <h3 className={styles.productTitle}>Spearmint</h3>
                  <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
              </div>
              </div>
              <div className={styles.productItem}>
              <div className={styles.productItemContainer}>
                <div className={styles.productImage}>
                  <img src="/images/products/citrus.png" alt="Citrus" />
                </div>
                <div className={styles.productCopy}>
                  <h3 className={styles.productTitle}>Citrus</h3>
                  <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutSection} ref={aboutRef}>
            <div className={styles.aboutContainer}>
              <h2>ABOUT</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            </div>
          </div>
        </div>
        <div className={styles.speechArrow} />
      </div>
    </div>
  );
};

export default HeroScroller;
