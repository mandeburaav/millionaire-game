import { Inter } from 'next/font/google';
import styles from '@/styles/Game.module.css';

import Sidebar from '../Sidebar/index';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function GameLayout({ children }) {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      {children}
      <Sidebar />
    </main>
  );
}
