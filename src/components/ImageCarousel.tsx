import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/ImageCarousel.module.css"; // adjust as needed

const images: string[] = [
  "/images/carousel/chelsea_web_image_1.jpg",
  "/images/carousel/chelsea_web_image_2.jpg",
  "/images/carousel/chelsea_web_image_3.jpg",
  "/images/carousel/chelsea_web_image_4.jpg",
  "/images/carousel/chelsea_web_image_5.jpg",
  "/images/carousel/chelsea_web_image_6.jpg",
];

interface ImageCarouselProps {
  style?: React.CSSProperties;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ style }) => {
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
  return (
    <div className={styles.carouselContainer} style={style}>
      <Image
        quality={40}
        fill
        src={images[currentIndex]}
        className={`${styles.image} ${fade ? styles.fadeOut : styles.staticImage}`}
        alt="current"
      />
      <Image
        fill
        quality={40}
        src={images[nextIndex]}
        className={`${styles.image} ${fade ? styles.fadeIn : ''}`}
        alt="next"
      />
    </div>
  );
};

export default ImageCarousel;
