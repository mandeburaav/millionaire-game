import {
  useState,
  useEffect,
} from 'react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import Questionnaire from '@/components/Questionnaire';
import type {
  IQuestions,
} from '@/components/models/questionnaire.model';
import styles from '@/styles/Game.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const Game = () => {
  const [questionsData, setQuestionsData] = useState<IQuestions[] | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const response = await fetch('/api/config');
        const data: IQuestions[] = await response.json();
        setQuestionsData(data);
      } catch (error) {
        console.warn('Failed to fetch config', error);
      }
    }

    fetchConfig();
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Questionnaire
        questionData={questionsData?.[activeQuestion] || null}
        activeQuestion={activeQuestion}
        setActiveQuestion={setActiveQuestion}
      />
      <Sidebar
        activeQuestion={activeQuestion}
        prizesData={questionsData}
        isMenuOpen={isMenuOpen}
        handleMenuClick={handleMenuClick}
      />
      <button type="button" className={styles.menu} onClick={handleMenuClick}>
        <Image
          src="/menu.svg"
          alt="menu icon"
          width="24"
          height="24"
        />
      </button>
    </main>
  );
};

export default Game;
