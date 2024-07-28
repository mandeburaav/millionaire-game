import { Inter } from 'next/font/google';
import styles from '@/styles/Layout.module.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function Layout({ children }) {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      {children}
    </main>
  );
}
