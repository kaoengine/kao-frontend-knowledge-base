type Use = 'primary' | 'secondary' | 'danger';

type ButtonProps = {
  use: Use;
  action: () => void;
};

export const Button = (props: ButtonProps) => {
  props;
};

// type FancyButtonProps = ButtonProps & {
//   sparkle: boolean;
// };

// export const FancyButton = (props: FancyButtonProps) => {
//   props;
// };