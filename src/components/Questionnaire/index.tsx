import type { FC } from 'react';
import {
  useState,
  useEffect,
} from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Game.module.css';
import { SvgIcon } from '../svg-icon';
import type {
  IQuestions,
} from '../models/questionnaire.model';

interface IProps {
  questionData: IQuestions | null;
  activeQuestion: number | 0;
  setActiveQuestion: (value: number | ((prev: number) => number)) => void;
}

interface ISelectedAnswer {
  index: number;
  correct: boolean;
}

const Questionnaire: FC<IProps> = ({
  questionData,
  activeQuestion,
  setActiveQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<ISelectedAnswer | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (showResult && selectedAnswer !== null) {
      const timer = setTimeout(() => {
        if (!selectedAnswer.correct) {
          setSelectedAnswer(null);
          setShowResult(false);
          router.push({ pathname: '/game-over', query: { prize: questionData?.value } });
        }
        if (activeQuestion < 11) {
          setActiveQuestion((prev) => prev + 1);
          setSelectedAnswer(null);
          setShowResult(false);
        } else {
          router.push({ pathname: '/game-over', query: { prize: questionData?.value } });
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showResult, selectedAnswer, activeQuestion, setActiveQuestion, questionData?.value, router]);

  const getAnswerClassName = (index: number) => {
    if (selectedAnswer === null) {
      return styles.answer;
    }
    if (selectedAnswer.index === index) {
      if (!showResult) {
        return `${styles.answer} ${styles.selected}`;
      }
      return selectedAnswer.correct ? `${styles.answer} ${styles.correct}` : `${styles.answer} ${styles.wrong}`;
    }
    return styles.answer;
  };

  const onAnswerClick = (index: number, correct: boolean) => {
    setSelectedAnswer({ index, correct });
    setShowResult(false);

    setTimeout(() => {
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className={styles.questionnaire}>
      {questionData && (
        <>
          <p className={styles.question}>{questionData.question}</p>
          <div className={styles.answers}>
            {questionData.answers?.map((answer) => (
              <button
                type="button"
                className={getAnswerClassName(answer?.id)}
                onClick={() => onAnswerClick(answer?.id, answer?.correct)}
                key={`answer-${answer?.id}`}
              >
                <SvgIcon type="answerButton" />
                <p>
                  <span>
                    {String.fromCharCode(97 + (answer?.id ?? 0)).toUpperCase()}
                    .
                  </span>
                  {' '}
                  {answer?.text}
                </p>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Questionnaire;
