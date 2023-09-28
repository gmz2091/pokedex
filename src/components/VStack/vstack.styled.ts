import {View} from 'react-native';
import styled from 'styled-components/native';
import {StackPropsStyled} from '../../interface';

export const ViewStack = styled(View)<StackPropsStyled>(
  ({center, direction, justifyContent, flex, wrap}) => ({
    flexDirection: direction,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    alignItems: center ? 'center' : 'flex-start',
    justifyContent: justifyContent,
    width: '100%',
    margin: '10px 0',
    flex: flex,
  }),
);
