type rollDialogProps = {
  children: any;
  dialogProps?: DialogProps;
  buttonProps?: ButtonProps;
  randomNumberProps?: randomNumberProps;
  trows?: number;
};

type randomNumberProps = {
  max: number;
  finalValue?: number;
  min?: number;
  duration?: number;
  speed?: number;
  onRollEnd?: () => void;
  className?: string;
};
