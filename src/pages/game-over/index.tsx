import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Layout from '../../components/Layouts/layout';

export default function GameOver() {
  return (
    <Layout>
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
        <p>Total score:</p>
        <h1>$8,000 earned</h1>
        <Link className={styles.linkButton} href="/game">Try again</Link>
      </div>
    </Layout>
  );
}
