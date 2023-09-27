import {Text} from 'react-native';
import React from 'react';
import {ButtonStyled, ContainerButton} from './button.styled';
import {ButtonProps} from './interface';

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled,
  rounded,
  color,
  loading,
  width,
  height,
  absolute,
  children,
  left,
  right,
  justifyContent,
}) => {
  return (
    <ContainerButton
      {...{
        rounded,
        color,
        width,
        height,
        absolute,
        left,
        right,
        justifyContent,
      }}>
      <ButtonStyled activeOpacity={0.8} onPress={onPress} disabled={disabled}>
        {title && <Text>{title}</Text>}
        {loading && <Text>Loading...</Text>}
        {children}
      </ButtonStyled>
    </ContainerButton>
  );
};

export default Button;
