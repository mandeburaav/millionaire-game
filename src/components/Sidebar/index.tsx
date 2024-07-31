import type { FC, MouseEventHandler } from 'react';
import Image from 'next/image';
import styles from '@/styles/Game.module.css';
import { SvgIcon } from '@/components/svg-icon';
import type {
  IQuestions,
} from '@/components/models/questionnaire.model';

interface IProps {
  prizesData: IQuestions[] | null;
  activeQuestion: number | 0;
  isMenuOpen: boolean;
  handleMenuClick: MouseEventHandler<HTMLButtonElement>;
}

const Sidebar: FC<IProps> = ({
  prizesData, activeQuestion, isMenuOpen, handleMenuClick,
}) => {
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
    <div className={`${styles.sidebar}`} data-active={isMenuOpen}>
      {prizesData?.map((item) => (
        <div key={item?.id} className={getAnswerClassName(item?.id)}>
          <SvgIcon type="prize" />
          <p>
            $
            {item?.value.toLocaleString('en-US')}
          </p>
        </div>
      ))}
      <button type="button" className={styles.menu} onClick={handleMenuClick}>
        <Image
          src="/close.svg"
          alt="menu icon"
          width="24"
          height="24"
        />
      </button>
    </div>
  );
};

export default Sidebar;
