import {TextInput} from 'react-native';
import styled from 'styled-components/native';

export const StyledTextInput = styled(TextInput)(({}) => ({
  width: '100%',
  height: 50,
  borderRadius: 10,
  borderWidth: 0.5,
  borderColor: '#7E7D7D',
  fontSize: 16,
  paddingHorizontal: 20,
}));
