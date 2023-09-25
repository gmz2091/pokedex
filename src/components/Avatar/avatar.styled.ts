import {View, Image} from 'react-native';
import styled from 'styled-components/native';

export const AvatarContainer = styled(View)(({}) => ({
  width: 150,
  height: 150,
  borderRadius: 50,
  alignItems: 'center',
  padding: 10,
}));

export const AvatarImage = styled(Image)(({}) => ({
  width: '100%',
  height: '100%',
  borderRadius: 100,
  marginBottom: 15,
}));
