import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.column}>
        <Image
          src="/hand.svg"
          alt="Vercel Logo"
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
        <h1>Who wants to be a millionaire?</h1>
        <Link className={styles.linkButton} href="/game">Start</Link>
      </div>
    </main>
  );
}
