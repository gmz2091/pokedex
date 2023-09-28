import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {StyledButtonProps} from './interface';

export const ContainerButton = styled(View)<StyledButtonProps>(
  ({
    rounded,
    color,
    width,
    height,
    absolute,
    left,
    right,
    justifyContent,
    opacity,
  }) => ({
    backgroundColor: color || '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: justifyContent || 'center',
    width: width || '100%',
    height: height || 40,
    borderRadius: rounded ? 50 : 10,
    position: absolute ? 'absolute' : 'relative',
    left: left,
    right: right,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    margin: 8,
    zIndex: 1,
    opacity: opacity || 1,
  }),
);

export const ButtonStyled = styled(TouchableOpacity)<StyledButtonProps>(
  ({loading}) => ({
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: loading ? 0.5 : 1,
    backgroundColor: 'transparent',
  }),
);
