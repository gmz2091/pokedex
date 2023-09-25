import React from 'react';
import {AvatarContainer, AvatarImage} from './avatar.styled';

interface AvatarProps {
  uri?: string;
}

const Avatar: React.FC<AvatarProps> = ({uri}) => {
  return (
    <AvatarContainer>
      <AvatarImage
        source={uri ? {uri} : require('../../assets/images/profile.jpeg')}
      />
    </AvatarContainer>
  );
};

export default Avatar;
