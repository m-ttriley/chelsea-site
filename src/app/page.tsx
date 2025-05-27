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
          style={{ width: '100%', height: 'auto', maxWidth: '280px', marginTop: '15px' }}
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
          placeholder="email address" 
          className={styles.emailInput} 
          />
        <button className={styles.signupButton}>
          submit
        </button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', margin: '16px 0' }}>
        <Image
          src='/images/icons/instagram.png'
          alt="Instagram Icon"
          style={{ width: '24px', height: '24px', cursor: 'pointer' }}
          width={24}
          height={24}
        />
       <Image
          src='/images/icons/twitter.png'
          alt="Twitter Icon"
          style={{ width: '24px', height: '24px', cursor: 'pointer' }}
           width={24}
          height={24}
        />
        <Image
          src='/images/icons/facebook.png'
          alt="Facebook Icon"
          style={{ width: '24px', height: '24px', cursor: 'pointer' }}
           width={24}
          height={24}
        />
      </div>
      <div className={styles.footer}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      </div>
    </>
}
