
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
  const [colorIndex, setColorIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const colors = [
    "#4e483c", "#4e4b3c", "#4e4b3c", "#4b4e3c", "#484e3c", "#454e3c",
    "#424e3c", "#3f4e3c", "#3c4e3c", "#3c4e3f", "#3c4e42", "#3c4e45",
    "#3c4e48", "#3c4e4b", "#3c4e4e", "#3c4b4e", "#3c484e", "#3c454e",
    "#3c424e", "#3c3f4e", "#3c3c4e", "#3f3c4e", "#423c4e", "#453c4e",
    "#483c4e", "#4b3c4e", "#4e3c4e", "#4e3c4b", "#4e3c48", "#4e3c45",
    "#4e3c42", "#4e3c3f", "#4e3c3c", "#4e3f3c", "#4e423c", "#4e453c"
  ];

useEffect(() => {
  const originalFetch = window.fetch;

  // window.fetch = async (...args) => {
  //   const [url, options] = args;

  //   const response = await originalFetch(...args);

  //   // Check for target API call
  //   const urlString = typeof url === 'string' ? url : url instanceof URL ? url.toString() : url?.url ?? '';
  //   if (urlString.includes('/form.flodesk.com/forms/') && response.ok) {
  //     console.log('Intercepted target API call!');
  //     // You can trigger any state or event here
  //   }

  //   return response;
  // };

  const interval = setInterval(() => {
    setColorIndex(prev => {
      if (forward) {
        if (prev >= colors.length - 1) {
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

  return () => {
    clearInterval(interval);
    window.fetch = originalFetch; // Restore original fetch on cleanup
  };
}, [forward]);

  const isMobile = useIsMobile();
  if (!isMobile) {
    return (
      <div className={styles.main} style={{ backgroundColor: colors[colorIndex] }}>
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
    <div className={styles.mainMobile} style={{ backgroundColor: '#4e483c' }}>
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
