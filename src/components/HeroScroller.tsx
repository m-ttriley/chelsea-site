'use client';

import { useRef, useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';
import styles from '../styles/HeroScroller.module.css'; // ✅ updated path
import ProductItem from './ProductItem';
import LogoComponent from './LogoComponent';

const HeroScroller: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  type ColorCode = 'yellow' | 'blue' | 'green';
  const [colorCode, setColorCode] = useState<ColorCode>('yellow');
  const colors = {
    yellow: [
      "#f9fd5d", "#defd5d", "#c3fd5d", "#a9fd5d", "#8efd5d", "#73fd5d",
      "#5dfd61", "#5dfd7c", "#5dfd96", "#5dfdb1", "#5dfdcb", "#5dfde6",
      "#5df9fd", "#5ddefd", "#5ddefd", "#5da9fd", "#5d8efd", "#5d73fd",
      "#615dfd", "#7c5dfd", "#965dfd", "#b15dfd", "#cb5dfd", "#e65dfd",
      "#fd5df9", "#fd5dde", "#fd5dc3", "#fd5da9", "#fd5d8e", "#fd5d73",
      "#fd615d", "#fd7c5d", "#fd965d", "#fdb15d", "#fdcb5d", "#fde65d"
    ],
    blue: [
      "#3d9ccc", "#3c83cc", "#3c6ccc", "#3c54cc", "#3c3ccc", "#543ccc",
      "#6c3ccc", "#843ccc", "#9c3ccc", "#b43ccc", "#cc3ccb", "#cc3cb3",
      "#cc3c9c", "#cc3c83", "#cc3c6c", "#cc3c54", "#cc3c3c", "#cc543c",
      "#cc6c3c", "#cc843c", "#cc9c3c", "#ccb43c", "#cbcc3c", "#b3cc3c",
      "#9ccc3c", "#83cc3c", "#6ccc3c", "#54cc3c", "#3ccc3c", "#3ccc54",
      "#3ccc6c", "#3ccc84", "#3ccc9c", "#3cccb4", "#3ccbcc", "#3cb3cc"
    ],
    green: [
      "#8ec444", "#79c444", "#64c444", "#4ec444", "#44c44e", "#44c464",
      "#44c479", "#44c48e", "#44c4a3", "#44c4b9", "#44b9c4", "#44a3c4",
      "#448ec4", "#4479c4", "#4464c4", "#444ec4", "#4e44c4", "#6444c4",
      "#7944c4", "#8e44c4", "#a344c4", "#b944c4", "#c444b9", "#c444a3",
      "#c4448e", "#c44479", "#c44464", "#c4444e", "#c44e44", "#c46444",
      "#c47944", "#c48e44", "#c4a344", "#c4b944", "#b9c444", "#a3c444"
    ],
    pink: [
      "#b9327e", "#b93267", "#b93251", "#b9323a", "#b94032", "#b95632", 
      "#b96d32", "#b98332", "#b99932", "#b9b032", "#abb932", "#94b932",
      "#7eb932", "#67b932", "#51b932", "#3ab932", "#32b940", "#32b956", 
      "#32b96d", "#32b983", "#32b999", "#32b9b0", "#32abb9", "#3294b9", 
      "#327eb9", "#3267b9", "#3251b9", "#323ab9", "#4032b9", "#5632b9", 
      "#6d32b9", "#8332b9", "#9932b9", "#b032b9", "#b932ab", "#b93294"],
    gray: [
      "#887a7a", "#887c7a", "#887f7a", "#88817a", "#88837a", "#88867a",
      "#88887a", "#86887a", "#83887a", "#81887a", "#7f887a", "#7c887a",
      "#7a887a", "#7a887c", "#7a887f", "#7a8881", "#7a8883", "#7a8886",
      "#7a8888", "#7a8688", "#7a8388", "#7a8188", "#7a7f88", "#7a7c88",
      "#7a7a88", "#7c7a88", "#7f7a88", "#817a88", "#837a88", "#867a88",
      "#887a88", "#887a86", "#887a83", "#887a81", "#887a7f", "#887a7c"
    ]
  }

  const [colorIndex, setColorIndex] = useState(0);
  const [quickTransition, setQuickTransition] = useState(false);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (quickTransition) {
          setQuickTransition(false);
      }

      setColorIndex(prev => {
        if (forward) {
          if (prev >= colors[colorCode].length - 1) {
            setForward(false);
            return prev - 1;
          }
          return prev + 1;
        } else {
          if (prev <= 0) {
            setForward(true);
            return prev + 1;
          }
          return prev - 1;
        }
      });
    }, 2000); // Change interval time here

    return () => clearInterval(interval); // Cleanup on unmount
  }, [forward, quickTransition]);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
      if (ref.current && containerRef.current) {
        containerRef.current.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth',
        });
      }
    };

  return (
    <>
    <div className={styles.headerImageContainer}>
      <LogoComponent width={'50%'} style={{ transitionDuration: quickTransition ? '0.5s' : '2s' }} fill={colors[colorCode][colorIndex]}></LogoComponent>
    </div>
    <div className={styles.heroScrollerPageContainer}>
      <div className={styles.controls}>
        <button style={{transitionDuration: quickTransition ? '0.5s' : '2s', backgroundColor: colors['yellow'][colorIndex]}} className={styles.controlButton} onClick={() => {
          setColorCode('yellow');
          setQuickTransition(true);
          setColorIndex(0);
          setForward(true);
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
        <button style={{transitionDuration: quickTransition ? '0.5s' : '2s', backgroundColor: colors['blue'][colorIndex]}} className={styles.controlButton} onClick={() => {
          setColorCode('blue');
          setQuickTransition(true);
          setColorIndex(0);
          setForward(true);
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
        <button style={{transitionDuration: quickTransition ? '0.5s' : '2s', backgroundColor: colors['green'][colorIndex]}} className={styles.controlButton} onClick={() => {
          setColorCode('green');
          setQuickTransition(true);
          setColorIndex(0);
          setForward(true);
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
        <button style={{transitionDuration: quickTransition ? '0.5s' : '2s', backgroundColor: colors['pink'][colorIndex]}} className={styles.controlButton}>instagram</button>
        <div className={styles.controlSpacer}>
          <svg viewBox='0 0 90 90'>
            <path fillRule="evenodd" fill="rgb(248, 243, 206)"
              d="M44.1000,0.000 C69.853,0.000 89.1000,20.147 89.1000,45.000 C89.1000,69.853 69.853,90.000 44.1000,90.000 C20.148,90.000 -0.000,69.853 -0.000,45.000 C-0.000,20.147 20.148,0.000 44.1000,0.000 Z"/>
          </svg>
        </div>
        <button style={{transitionDuration: quickTransition ? '0.5s' : '2s', backgroundColor: colors['gray'][colorIndex]}} className={styles.controlButton}>contact</button>
      </div>

      <div className={styles.heroScrollerContainer}>
        <div className={styles.heroContainer} style={{transitionDuration: quickTransition ? '0.5s' : '2s', borderColor: colors[colorCode][colorIndex], backgroundColor: colors[colorCode][colorIndex]}} ref={containerRef}>
          <div className={styles.imageSection} ref={homeRef}>
            <ImageCarousel style={{ transitionDuration: quickTransition ? '0.5s' : '2s', backgroundColor: colors[colorCode][colorIndex] }} />
          </div>
          <div className={styles.productSection} style={{transitionDuration: quickTransition ? '0.5s' : '2s', backgroundColor: colors[colorCode][colorIndex]}} ref={productsRef}>
            <h2>PRODUCTS</h2>
            <div className={styles.productList}>
              <ProductItem
                imageSrc="/images/products/peppermint.png"
                imageAlt="Peppermint"
                title="Peppermint"
                price="$20"
                description="Notes: Peppermint Essential Oil"
                borderColor={colors['blue'][colorIndex]}
              />
                <ProductItem
                imageSrc="/images/products/spearmint.png"
                imageAlt="Wintergreen"
                title="Wintergreen"
                price="$20"
                description="Notes: Organic Wintergreen Essential Oil, Organic Cane Sugar"
                borderColor={colors['blue'][colorIndex]}
                />
                <ProductItem
                imageSrc="/images/products/citrus.png"
                imageAlt="Citrus"
                title="Citrus"
                price="$20"
                description="Notes: Organic Grapefruit Juice, Organic Lemon Juice, Organic Orange Essential Oil"
                borderColor={colors['blue'][colorIndex]}
                />
            </div>
          </div>
          <div className={styles.aboutSection} style={{transitionDuration: quickTransition ? '0.5s' : '2s', borderColor: colors[colorCode][colorIndex], backgroundColor: colors[colorCode][colorIndex]}} ref={aboutRef}>
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
            <path className={styles.speechArrowColor} style={{ transitionDuration: quickTransition ? '0.5s' : '2s', fill: colors[colorCode][colorIndex] }} d="M246,213.12c-.41.08-.7-.13-1.05-.27-11.06-4.53-22.34-10.44-33.35-15.37-44.73-20.06-90.03-39.06-136.4-55.1-3.27,1.69-7.19,1.25-10.76.9C19.92,139.01-9.29,94.27,3.36,51.48,18.13,1.49,79.91-15.96,119.21,17.95c2.86-.12,5.73-.31,8.6-.2.8.03,6.1.42,6.36.6.55.37-.28,2.29-.42,2.97-.58,2.84-1.99,9.03-1.5,11.67.17.94,2.83,4.85,3.48,6.12,7.86,15.44,9.67,32.33,6.03,49.26-.31,1.47-1.3,3.81-1.38,5.12-.11,1.91,2.34,7.07,1.89,8.58-.14.48-.84.61-.82,1.15.08,1.55,1.47,5.65,1.99,7.37,12.91,42.43,52.47,70.7,87.92,93.76l14.62,8.78Z"/>
          </svg>
        </div>
        <img className={styles.frog} src="/images/frog/frog.webp" alt="Frog" />
      </div>
      <div>
      <div className={styles.signupContainer}>
        <div className={styles.signup}>
          Sign up for updates!
        </div>
        <div style={{ transitionDuration: quickTransition ? '0.5s' : '2s', backgroundColor: colors[colorCode][colorIndex]}} className={styles.emailInputContainer} >
        <input
          type="email" 
          placeholder="email address" 
          className={styles.emailInput} 
          />
        <button className={styles.signupButton}>
          submit
        </button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', margin: '14px 0', marginTop: '24px' }}>
        <div style={{ width: '24px', height: '24px', cursor: 'pointer', marginRight: '1px' }}>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path className={styles.speechArrowColor} style={{ fill: colors[colorCode][colorIndex] }} d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
        </div>
        <div style={{ width: '24px', height: '24px', cursor: 'pointer' }}>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path className={styles.speechArrowColor} style={{ fill: colors[colorCode][colorIndex] }} d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
        </div>
        <div style={{ width: '24px', height: '24px', cursor: 'pointer' }}>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path className={styles.speechArrowColor} style={{ fill: colors[colorCode][colorIndex] }} d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default HeroScroller;
