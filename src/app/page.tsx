
'use client';
import React from 'react';
import styles from '@/styles/Main.module.css';
import HeroScroller from '../components/HeroScroller';
import MobileView from '../components/MobileView';
import { useEffect, useState } from 'react';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  return isMobile;
}

export default function Page() {
  const isMobile = useIsMobile();
  if (!isMobile) {
    return (
      <div className={styles.main}>
        <div>
          <HeroScroller />
          <div className={styles.footer}>
            <p>Mobile view is not supported yet. Please use a desktop browser.</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.mainMobile}>
      <div>
        {/* <HeroScroller /> */}
        <MobileView />
        <div className={styles.footer}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
      </div>
    </div>
  );
}
