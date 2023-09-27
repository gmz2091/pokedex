import {FlatListProps} from 'react-native';

export interface FlatListType<T>
  extends Omit<FlatListProps<T>, 'data' | 'renderItem'> {
  data: T[];
  keyExtractor: (item: T) => string;
  renderItem: ({item}: {item: T}) => JSX.Element;
  onEndReached: () => void;
  numColumns?: number;
}
