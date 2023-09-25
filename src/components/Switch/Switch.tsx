import React from 'react';
import {Switch as SwitchDefault} from 'react-native';
import {SwitchProps} from './interface';

const Switch = ({toggleSwitchDark, value, thumbColor}: SwitchProps) => {
  return (
    <SwitchDefault
      trackColor={{false: '#81b0ff', true: '#767577'}}
      thumbColor={thumbColor}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitchDark}
      value={value}
    />
  );
};

export default Switch;
