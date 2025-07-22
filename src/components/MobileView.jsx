'use client';

import React, { useRef, useState } from 'react';
import styles from '../styles/MobileView.module.css';
import ImageCarousel from './ImageCarousel';
import ProductItem from './ProductItem';
import LogoComponent from './LogoComponent';
import { slide as Menu } from 'react-burger-menu'

const MobileView = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const containerRef = useRef(null);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const [emailValue, setEmailValue] = useState('');
  const [submitPending, setSubmitPending] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const triggerSubmit = () => {
    setSubmitPending(true);

    const interval = setInterval(() => {
      const checkEl = document.querySelector('.fd-form-check');
      if (!checkEl) {
        setSubmitSuccess(true);
        setSubmitPending(false);
        clearInterval(interval);
      }
    }, 500);
  }

  const [isMenuOpen, setMenuOpen] = useState(false);

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStateChange = (state) => {
    setMenuOpen(state.menuOpen);
  }

  const burgerStyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '25px',
    height: '25px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#f9fd5d',
    height: '10%',
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: 'auto',
  },
  bmMenu: {
    background: '#4e483c',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

  return (
    <div id="scroll-container" ref={containerRef}>
      <Menu right isOpen={isMenuOpen} onStateChange={(state) => handleStateChange(state)} styles={burgerStyles}>
        <button className={styles.controlButton} style={{ backgroundColor: '#f9fd5d' }} onClick={() => { setMenuOpen(false); scrollTo(homeRef) }}> home </button>
        <button className={styles.controlButton} style={{ backgroundColor: '#3d9ccc' }} onClick={() => { setMenuOpen(false); scrollTo(productsRef) }}> products </button>
        <button className={styles.controlButton} style={{ backgroundColor: '#8ec444' }} onClick={() => { setMenuOpen(false); scrollTo(aboutRef) }}> about </button>
        <button className={styles.controlButton} style={{ backgroundColor: '#b9327e' }} onClick={() => { scrollTo(homeRef) }}> instagram </button>
        <button className={styles.controlButton} style={{ backgroundColor: '#887a7a' }} onClick={() => { scrollTo(homeRef) }}> contact </button>
      </Menu>
      <div className={styles.headerImageContainer} ref={homeRef}>
        <LogoComponent fill={'#f9fd5d'}></LogoComponent>
      </div>
      <div className={styles.heroContainer}>
      <div className={styles.imageCarouselContainer}>
        <ImageCarousel style={{ backgroundColor: "#f9fd5d" }} />
      </div>
      </div>
      <div className={styles.productSection} ref={productsRef}>
        <h2>PRODUCTS</h2>
        <div style={{ borderBottom: '1px solid #f8f3ce', width: '40%', margin: 'auto', opacity: '0.2' }}></div>
      </div>
      <div className={styles.productList}>
        <ProductItem
          imageSrc="/images/products/peppermint.png"
          imageAlt="Peppermint"
          title="Peppermint"
          price="$20"
          description="Peppermint Essential Oil"
        />
          <ProductItem
          imageSrc="/images/products/spearmint.png"
          imageAlt="Wintergreen"
          title="Wintergreen"
          price="$20"
          description="Organic Wintergreen Essential Oil, Organic Cane Sugar"
          />
          <ProductItem
          imageSrc="/images/products/citrus.png"
          imageAlt="Citrus"
          title="Citrus"
          price="$20"
          description="Organic Grapefruit Juice, Organic Lemon Juice, Organic Orange Essential Oil"
          />
      </div>
      <div className={styles.aboutSection} ref={aboutRef}>
        <h2>ABOUT</h2>
        <div style={{ borderBottom: '1px solid #f8f3ce', width: '40%', margin: 'auto', opacity: '0.2' }}></div>
        <p>
          <mark>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
          </mark>
        </p>
        <div style={{ borderBottom: '1px solid #f8f3ce', width: '40%', margin: 'auto', opacity: '0.2' }}></div>
      </div>
      <div className={styles.signupContainer}>
                  <div className={styles.signup}>
                    Sign up for updates!
                  </div>
                  <div
                    className={`${styles.emailInputContainer} ff-68716212bedecce39b8014a9`}
                    data-ff-el="root"
                    data-ff-version="3"
                    data-ff-type="inline"
                    data-ff-name="ribbonBanner"
                    data-ff-stage="default"
                    style={{ backgroundColor: '#f9fd5d' }}>
      
                    <div
                      data-ff-el="config"
                      data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJyZWRpcmVjdCIsIm1lc3NhZ2UiOiIiLCJyZWRpcmVjdFVybCI6IiJ9LCJjb2kiOmZhbHNlLCJzaG93Rm9yUmV0dXJuVmlzaXRvcnMiOnRydWUsIm5vdGlmaWNhdGlvbiI6dHJ1ZX0="
                      style={{ display: "none" }}></div>
      
                    <div className="ff-68716212bedecce39b8014a9__container">
                      <form
                        className="ff-68716212bedecce39b8014a9__form"
                        action="https://form.flodesk.com/forms/68716212bedecce39b8014a9/submit"
                        method="post"
                        data-ff-el="form"
                        onSubmit={() => triggerSubmit()}>
                        <div
                          className="ff-68716212bedecce39b8014a9__content fd-form-content"
                          data-ff-el="content">
                          <div className="ff-68716212bedecce39b8014a9__fields" data-ff-el="fields" style={{
                            width: '50%',
                            display: 'inline-block',
                            paddingTop: '4px',
                          }}>
                            <div className="ff-68716212bedecce39b8014a9__field fd-form-group">
                              {!submitPending && <input
                                onChange={(e) => setEmailValue(e.target.value)}
                                value={emailValue}
                                id="ff-68716212bedecce39b8014a9-email"
                                className={`${styles.emailInput} ff-68716212bedecce39b8014a9__control fd-form-control`}
                                type="email"
                                maxLength={255}
                                name="email"
                                placeholder="Email address"
                                data-ff-tab="email::submit"
                                required />}
                            </div>
                            <input type="text" maxLength={255} name="confirm_email_address" style={{ display: "none" }} />
                          </div>
                          {submitSuccess ? <span className={styles.signupButton} style={{top: '9px'}}>thanks!</span> : <button disabled={!emailValue || !isValidEmail(emailValue)}
                            type="submit"
                            className={`${styles.signupButton} ff-68716212bedecce39b8014a9__button fd-btn`}
                            data-ff-el="submit"
                            data-ff-tab="submit"
                            style={{ backgroundColor: '#f9fd5d' }}>
                            <span>submit</span>
                          </button>}
                        </div>
      
                        <div className="ff-68716212bedecce39b8014a9__error fd-form-error" style={{ display: 'none' }} data-ff-el="error">err</div>
                      </form>
                    </div>
                  </div>
                </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', margin: '14px 0', marginTop: '24px' }}>
        <div style={{ width: '24px', height: '24px', cursor: 'pointer', marginRight: '1px' }}>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path className={styles.speechArrowColor} style={{ fill: '#f9fd5d' }} d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
        </div>
        <div style={{ width: '24px', height: '24px', cursor: 'pointer' }}>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path className={styles.speechArrowColor} style={{ fill: '#f9fd5d' }} d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
        </div>
        <div style={{ width: '24px', height: '24px', cursor: 'pointer' }}>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path className={styles.speechArrowColor} style={{ fill: '#f9fd5d' }} d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default MobileView;