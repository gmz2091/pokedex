export interface ButtonProps extends StyledButtonProps {
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export interface StyledButtonProps {
  loading?: boolean;
  color?: string;
  rounded?: boolean;
  width?: string | number;
  height?: string | number;
  absolute?: boolean;
  left?: number;
  right?: number;
  justifyContent?: 'center' | 'flex-start' | 'flex-end';
}
