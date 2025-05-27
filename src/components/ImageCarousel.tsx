import React, { use, useEffect, useState } from "react";
import styles from "../styles/ImageCarousel.module.css"; // adjust as needed

const images: string[] = [
  "/images/carousel/carousel_1.jpg",
  "/images/carousel/carousel_2.jpg",
  "/images/carousel/carousel_3.jpg",
  "/images/carousel/carousel_4.jpg",
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(false);
      }, 1000); // fade duration
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const nextIndex = (currentIndex + 1) % images.length;
  console.log("Current Index:", currentIndex);
  return (
    <div className={styles.carouselContainer}>
      <img
        src={images[currentIndex]}
        className={`${styles.image} ${fade ? styles.fadeOut : styles.staticImage}`}
        alt="current"
      />
      <img
        src={images[nextIndex]}
        className={`${styles.image} ${fade ? styles.fadeIn : ''}`}
        alt="next"
      />
    </div>
  );
};

export default ImageCarousel;
