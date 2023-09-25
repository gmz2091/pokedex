import React from 'react';
import {ViewStack} from './vstack.styled';
import {IProps} from '../../interface';

const VStack = ({
  children,
  center,
  direction,
  justifyContent,
  flex,
}: IProps) => {
  return (
    <ViewStack {...{center, direction, justifyContent, flex}}>
      {children}
    </ViewStack>
  );
};

export default VStack;
