
import styles from '@/styles/Main.module.css';
import HeroScroller from '../components/HeroScroller';

export default function Page() {
  return (
    <div className={styles.main}>
      <div>
        <HeroScroller />
        <div className={styles.footer}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
      </div>
    </div>
  );
}
