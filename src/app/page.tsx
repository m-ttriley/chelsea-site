import Image from 'next/image';
import styles from '@/styles/Main.module.css'; // ✅ updated path
import ChelseaLogo from '../../public/Chelsea_Logo-Black.png';
import HeroScroller from '../components/HeroScroller';

export default function Page() {
  return <>
      <div className={styles.headerImageContainer}>
        <Image 
          src={ChelseaLogo}
          alt="Chelsea Logo" 
          style={{ width: '100%', height: 'auto', maxWidth: '280px', marginTop: '15px' }}
        />
      </div>
      <HeroScroller />
      <div className={styles.footer}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      </div>
    </>
}
