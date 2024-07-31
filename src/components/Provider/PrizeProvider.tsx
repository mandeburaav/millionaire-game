import type {
  FC,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import {
  createContext, 
  useState,
  useContext,
  useMemo,
} from 'react';

interface IProps {
  children: ReactNode;
}

interface IPrizeContext {
  prize: number;
  setPrize: Dispatch<SetStateAction<number>>;
}

const PrizeContext = createContext<IPrizeContext | undefined>(undefined);

export const PrizeProvider: FC<IProps> = ({ children }) => {
  const [prize, setPrize] = useState<number>(0);

  const value = useMemo(() => ({ prize, setPrize }), [prize]);

  return (
    <PrizeContext.Provider value={value}>
      {children}
    </PrizeContext.Provider>
  );
};

export const usePrize = (): IPrizeContext => {
  const context = useContext(PrizeContext);
  if (!context) {
    throw new Error('usePrize must be used within a PrizeProvider');
  }
  return context;
};

export default PrizeProvider;
