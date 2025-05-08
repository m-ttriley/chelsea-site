import Image from 'next/image';
import styles from '@/styles/Main.module.css'; // ✅ updated path
import ChelseaLogo from '../../public/Chelsea_Logo-Black.png';
import HeroScroller from '../components/HeroScroller';

export default function Page() {
  return <>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Image 
          src={ChelseaLogo}
          alt="Chelsea Logo" 
          style={{ width: '100%', height: 'auto', maxWidth: '350px' }}
        />
      </div>
      <HeroScroller />
      <div className={styles.signupContainer}>
        <div className={styles.signup}>
          Sign up for updates!
        </div>
        <div className={styles.emailInputContainer}>
        <input
          type="email" 
          placeholder="Enter your email" 
          className={styles.emailInput} 
          />
        <button className={styles.signupButton}>
          submit
        </button>
        </div>
      </div>
      </>;
}
