import React from 'react';
import {ViewStack} from '..';
import {StyledTextInput} from './textfield.styled';
import {useDarkMode} from '../../hooks';

interface Iprops {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const TextField: React.FC<Iprops> = ({placeholder, value, onChangeText}) => {
  const {backgroundStyle} = useDarkMode();
  return (
    <ViewStack>
      <StyledTextInput
        style={{color: backgroundStyle.color}}
        placeholderTextColor={'#7E7D7D'}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </ViewStack>
  );
};

export default TextField;
