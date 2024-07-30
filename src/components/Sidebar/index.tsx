import type { FC } from 'react';
import styles from '@/styles/Game.module.css';
import { SvgIcon } from '@/components/svg-icon';
import type {
  IQuestions,
} from '@/components/models/questionnaire.model';

interface IProps {
  prizesData: IQuestions[] | null;
  activeQuestion: number | 0;
}

const Sidebar: FC<IProps> = ({ prizesData, activeQuestion }) => {
  const getAnswerClassName = (index: number) => {
    if (index < activeQuestion) {
      return `${styles.prize}  ${styles.finished}`;
    }
    if (index === activeQuestion) {
      return `${styles.prize}  ${styles.active}`;
    }
    return styles.prize;
  };

  return (
    <div className={`${styles.sidebar}`}>
      {prizesData?.map((item) => (
        <div key={item?.id} className={getAnswerClassName(item?.id)}>
          <SvgIcon type="prize" />
          <p>
            $
            {item?.value.toLocaleString('en-US')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
