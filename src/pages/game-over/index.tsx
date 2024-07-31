import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';
import { usePrize } from '@/components/Provider/PrizeProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const GameOver = () => {
  const { prize } = usePrize();

  return (
    <main className={`${styles.main} ${styles.mainEnd} ${inter.className}`}>
      <div className={styles.column}>
        <Image
          src="/hand.svg"
          alt="Game logo"
          className={styles.vercelLogo}
          width="624"
          height="367"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className={styles.column}>
        <p>Total score:</p>
        <h1>
          $
          {prize?.toLocaleString('en-US') || 0}
          {' '}
          earned
        </h1>
        <Link className={styles.linkButton} href="/game">Try again</Link>
      </div>
    </main>
  );
};

export default GameOver;
