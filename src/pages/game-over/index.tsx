import { Inter } from "next/font/google";
import Head from "next/head";
import Image from 'next/image'
import Link from 'next/link'
import styles from "@/styles/Home.module.css";

const inter = Inter({
  variable: '--font-inter',
  subsets: ["latin"],
})

export default function GameOver() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.column}>
          <Image
            src="/hand.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width="624" height="367"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className={styles.column}>
          <p>Total score:</p>
          <h1>$8,000</h1>
          <Link className={styles.linkButton} href="/game">Try again</Link>
        </div>
      </main>
    </>
  );
}
