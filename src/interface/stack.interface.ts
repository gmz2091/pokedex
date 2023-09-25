export interface IProps extends StackPropsStyled {
  children: React.ReactNode;
}

export interface StackPropsStyled {
  center?: boolean;
  direction?: 'row' | 'column';
  justifyContent?: 'space-between' | 'center' | 'flex-start';
  flex?: number;
}
