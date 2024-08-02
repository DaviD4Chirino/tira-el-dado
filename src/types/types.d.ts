type dieProps = {
  faces: number;
};

type rollDialogProps = {
  children: any;
  dialogProps?: DialogProps;
  buttonProps?: ButtonProps;
  randomNumberProps?: randomNumberProps;
  trows?: number;
  faces: number;
};

type randomNumberProps = {
  faces: number;
  value: number;
  min?: number;
  duration?: number;
  speed?: number;
  onRollEnd?: () => void;
  className?: string;
};

type rollInfo = {
  diceAmount: number;
  result: number;
  faces: number;
  rolls: number[];
  date: Date;
};

type historyContext = {
  history: rollInfo[] | undefined;
  setHistory: React.Dispatch<React.SetStateAction<rollInfo[] | undefined>>;
  eraseHistory: () => void;
  logRolls: (rolls: rollInfo["rolls"], faces: rollInfo["faces"]) => void;
};
