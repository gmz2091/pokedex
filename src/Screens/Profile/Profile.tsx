import {Avatar, ViewStack, SafeView, Text, Switch} from '../../components';
import React from 'react';
import {useDarkMode} from '../../hooks';
import {FlatList} from 'react-native';

const Profile = () => {
  const {toggleSwitchDark, dark} = useDarkMode();

  const userData = {
    fullName: 'John Doe',
    birthdate: '01/01/1990',
    imageProfile: 'https://i.pravatar.cc/300',
  };

  return (
    <SafeView>
      <ViewStack center direction="column">
        <Avatar uri={userData.imageProfile} />
        <Text fontSize={20} title={userData.fullName} />
      </ViewStack>
      <ViewStack flex={1} justifyContent="space-between" direction="column">
        <ViewStack justifyContent="space-between" direction="row">
          <FlatList
            data={[{key: 'Birthdate', value: userData.birthdate}]}
            renderItem={({item}) => (
              <ViewStack direction="column">
                <Text fontSize={12} opacity={0.5} title={item.key} />
                <Text fontSize={15} title={item.value} />
              </ViewStack>
            )}
          />
        </ViewStack>
        <ViewStack justifyContent="space-between" direction="row">
          <Text fontSize={15} title="Dark Mode" />
          <Switch
            toggleSwitchDark={toggleSwitchDark}
            value={dark !== 'dark' ? true : false}
            thumbColor={dark === 'dark' ? '#f5dd4b' : '#f4f3f4'}
          />
        </ViewStack>
      </ViewStack>
    </SafeView>
  );
};

export default Profile;
