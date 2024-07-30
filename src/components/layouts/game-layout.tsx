import type { FC, ReactNode } from 'react';
import { Inter } from 'next/font/google';
import styles from '@/styles/Game.module.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

interface IProps {
  children: ReactNode;
}

const GameLayout: FC<IProps> = ({ children }) => (
  <main className={`${styles.main} ${inter.className}`}>
    {children}
  </main>
);

export default GameLayout;
