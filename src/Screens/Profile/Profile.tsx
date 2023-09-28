import React from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Avatar,
  ViewStack,
  SafeView,
  Text,
  Switch,
  Button,
} from '../../components';
import {useDarkMode, useModifyAccount, useUtils} from '../../hooks';

const Profile = ({navigation}: any) => {
  const {toggleSwitchDark, dark} = useDarkMode();
  const {width, chooseImage} = useUtils();
  const {userData, dataUsr, modifyAccount} = useModifyAccount();

  return (
    <SafeView>
      <Button
        color="#f5dd4b"
        rounded
        absolute
        right={10}
        width="50px"
        height="50px"
        onPress={() => navigation.navigate('EditProfile')}>
        <Icon name="create" size={25} />
      </Button>
      <ViewStack center direction="column">
        <ViewStack center>
          <Button
            color="#CC1414"
            rounded
            absolute
            right={width / 2 - 20}
            width="35px"
            height="35px"
            onPress={() => chooseImage(modifyAccount)}>
            <Icon color="#fff" name="camera-alt" size={17} />
          </Button>
          <Avatar uri={userData.imageProfile || dataUsr.imageProfile} />
        </ViewStack>
        <Text fontSize={20} title={userData.fullName || 'John Doe'} />
      </ViewStack>
      <ViewStack flex={1} justifyContent="space-between" direction="column">
        <ViewStack justifyContent="space-between" direction="row">
          <FlatList
            data={[
              {key: 'Birthdate', value: userData.birthdate || '01/01/1990'},
            ]}
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
