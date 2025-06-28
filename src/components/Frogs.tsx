import React, { useEffect, useState } from "react";
import styles from "../styles/Frogs.module.css"; // adjust as needed

const images: string[] = [
  "/images/frog/frog.webp",
  "/images/frog/frog-blue.webp",
  "/images/frog/frog-green.webp",
];

const codeToIndexMap: { [key: string]: number } = {
  "yellow": 0,
  "blue": 1,
  "green": 2,
};

interface FrogsProps {
  style?: React.CSSProperties;
  colorCode: string;
}

const Frogs: React.FC<FrogsProps> = ({ style, colorCode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(1);
  const [fade, setFade] = useState(false);

  useEffect(() => {
   const newIndex = codeToIndexMap[colorCode] || 0;

  // Prevent unnecessary state update
  if (newIndex === currentIndex) return;

  // Update previous first
  setPrevIndex(currentIndex);

  setTimeout(() => setCurrentIndex(newIndex), 300);

  // Trigger fade animation
  setFade(true);
  const fadeTimeout = setTimeout(() => {
    setFade(false);
  }, 300);

  return () => clearTimeout(fadeTimeout); // Cleanup on rerun
  }, [colorCode]);

  return (
  <div className={styles.carouselContainer} style={style}>
    <img
      className={`${styles.frog} ${fade ? styles.visible : styles.hidden}`}
      src={images[prevIndex]}
      alt="current frog"
    />
    <img
      className={`${styles.frog} ${fade ? styles.hidden : styles.visible}`}
      src={images[currentIndex]}
      alt="previous frog"
    />
  </div>
);
}

export default Frogs;
