import {
  useState,
  useEffect,
} from 'react';
import GameLayout from '../../components/Layouts/game-layout';
import Sidebar from '../../components/Sidebar';
import Questionnaire from '../../components/Questionnaire';
import type {
  IQuestions,
} from '../../components/models/questionnaire.model';

const Game = () => {
  const [questionsData, setQuestionsData] = useState<IQuestions[] | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);

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

  return (
    <GameLayout>
      <Questionnaire
        questionData={questionsData?.[activeQuestion] || null}
        activeQuestion={activeQuestion}
        setActiveQuestion={setActiveQuestion}
      />
      <Sidebar
        activeQuestion={activeQuestion}
        prizesData={questionsData}
      />
    </GameLayout>
  );
};

export default Game;
