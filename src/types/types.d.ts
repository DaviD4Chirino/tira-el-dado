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
