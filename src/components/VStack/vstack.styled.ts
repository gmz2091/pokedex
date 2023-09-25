import {View} from 'react-native';
import styled from 'styled-components/native';
import {StackPropsStyled} from '../../interface';

export const ViewStack = styled(View)<StackPropsStyled>(
  ({center, direction, justifyContent, flex}) => ({
    flexDirection: direction,
    alignItems: center ? 'center' : 'flex-start',
    justifyContent: justifyContent,
    width: '100%',
    margin: '10px 0',
    flex: flex,
  }),
);
