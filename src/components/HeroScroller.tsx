'use client';

import { useRef } from 'react';
import ImageCarousel from './ImageCarousel';
import styles from '../styles/HeroScroller.module.css'; // ✅ updated path
import { useState } from 'react';

const HeroScroller: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  type ColorCode = '#f9fd5d' | '#3d9ccc' | '#90c444';
  const [colorCode, setColorCode] = useState<ColorCode>('#f9fd5d');

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
        <button style={{backgroundColor: '#ca0574'}} className={styles.controlButton} onClick={() => {
          setColorCode('#f9fd5d');
          scrollTo(homeRef)
        }}>
          home
        </button>
        <div className={styles.controlSpacer}>
          <svg viewBox='0 0 90 90'>
            <path fillRule="evenodd" fill="rgb(248, 243, 206)"
              d="M44.1000,0.000 C69.853,0.000 89.1000,20.147 89.1000,45.000 C89.1000,69.853 69.853,90.000 44.1000,90.000 C20.148,90.000 -0.000,69.853 -0.000,45.000 C-0.000,20.147 20.148,0.000 44.1000,0.000 Z"/>
          </svg>
        </div>
        <button style={{backgroundColor: '#3d9ccc',}} className={styles.controlButton} onClick={() => {
          setColorCode('#3d9ccc');
          scrollTo(productsRef)
        }}>
            products
        </button>
        <div className={styles.controlSpacer}>
          <svg viewBox='0 0 90 90'>
            <path fillRule="evenodd" fill="rgb(248, 243, 206)"
              d="M44.1000,0.000 C69.853,0.000 89.1000,20.147 89.1000,45.000 C89.1000,69.853 69.853,90.000 44.1000,90.000 C20.148,90.000 -0.000,69.853 -0.000,45.000 C-0.000,20.147 20.148,0.000 44.1000,0.000 Z"/>
          </svg>
        </div>
        <button style={{backgroundColor: '#90c444'}} className={styles.controlButton} onClick={() => {
          setColorCode('#90c444');
          scrollTo(aboutRef)
        }}>
          about
        </button>
        <div className={styles.controlSpacer}>
          <svg viewBox='0 0 90 90'>
            <path fillRule="evenodd" fill="rgb(248, 243, 206)"
              d="M44.1000,0.000 C69.853,0.000 89.1000,20.147 89.1000,45.000 C89.1000,69.853 69.853,90.000 44.1000,90.000 C20.148,90.000 -0.000,69.853 -0.000,45.000 C-0.000,20.147 20.148,0.000 44.1000,0.000 Z"/>
          </svg>
        </div>
        <button style={{backgroundColor: '#f9fd5d'}} className={styles.controlButton}>instagram</button>
        <div className={styles.controlSpacer}>
          <svg viewBox='0 0 90 90'>
            <path fillRule="evenodd" fill="rgb(248, 243, 206)"
              d="M44.1000,0.000 C69.853,0.000 89.1000,20.147 89.1000,45.000 C89.1000,69.853 69.853,90.000 44.1000,90.000 C20.148,90.000 -0.000,69.853 -0.000,45.000 C-0.000,20.147 20.148,0.000 44.1000,0.000 Z"/>
          </svg>
        </div>
        <button style={{backgroundColor: '#887a7a'}} className={styles.controlButton}>contact</button>
      </div>

      <div className={styles.heroScrollerContainer}>
        <div className={styles.heroContainer} style={{borderColor: colorCode, backgroundColor: colorCode}} ref={containerRef}>
          <div className={styles.imageSection} ref={homeRef}>
            <ImageCarousel />
          </div>
          <div className={styles.productSection} style={{backgroundColor: colorCode}} ref={productsRef}>
            <h2>PRODUCTS</h2>
            <div className={styles.productList}>
              <div className={styles.productItem}>
              <div className={styles.productPrice}>$20</div>
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
              <div className={styles.productPrice}>$20</div>
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
              <div className={styles.productPrice}>$20</div>
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
          <div className={styles.aboutSection} style={{borderColor: colorCode, backgroundColor: colorCode}} ref={aboutRef}>
            <div className={styles.aboutContainer}>
              <h2>ABOUT</h2>
              <p>
                <mark>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                </mark>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.speechArrow}>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.56 215.52">
            <path className={styles.speechArrowColor} style={{ fill: colorCode }} d="M246,213.12c-.41.08-.7-.13-1.05-.27-11.06-4.53-22.34-10.44-33.35-15.37-44.73-20.06-90.03-39.06-136.4-55.1-3.27,1.69-7.19,1.25-10.76.9C19.92,139.01-9.29,94.27,3.36,51.48,18.13,1.49,79.91-15.96,119.21,17.95c2.86-.12,5.73-.31,8.6-.2.8.03,6.1.42,6.36.6.55.37-.28,2.29-.42,2.97-.58,2.84-1.99,9.03-1.5,11.67.17.94,2.83,4.85,3.48,6.12,7.86,15.44,9.67,32.33,6.03,49.26-.31,1.47-1.3,3.81-1.38,5.12-.11,1.91,2.34,7.07,1.89,8.58-.14.48-.84.61-.82,1.15.08,1.55,1.47,5.65,1.99,7.37,12.91,42.43,52.47,70.7,87.92,93.76l14.62,8.78Z"/>
          </svg>
        </div>
        <img className={styles.frog} src="/images/icons/frog.png" alt="SpeechBubble" />
      </div>
    </div>
  );
};

export default HeroScroller;
