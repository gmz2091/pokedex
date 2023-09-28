export interface PropsText {
  color?: string;
  bgColor?: string;
  title: string;
  fontSize?: number;
  fontWeight?:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  opacity?: number;
}
