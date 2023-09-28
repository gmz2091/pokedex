import React from 'react';
import {ViewStack, Button, Text} from '..';
import {useUtils} from '../../hooks';

interface Props<T> {
  data: T[];
  title: string;
  color: string;
}

const InfoPokemon: React.FC<Props<any>> = ({data, title, color}) => {
  const {width} = useUtils();
  return (
    <ViewStack>
      <Text title={title} />
      <ViewStack
        wrap
        justifyContent={data.length > 1 ? 'space-between' : 'center'}
        direction="row">
        {data.map((key, index) => (
          <Button
            disabled
            key={index}
            rounded
            color={color}
            width={width / 3}
            opacity={index % 2 !== 0 ? 0.7 : 1}
            height="40px">
            <Text bgColor={color} fontSize={15} title={key[title].name} />
          </Button>
        ))}
      </ViewStack>
    </ViewStack>
  );
};

export default InfoPokemon;
