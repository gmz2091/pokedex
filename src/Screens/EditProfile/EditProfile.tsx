import React from 'react';
import {SafeView, Text, Button, ViewStack} from '../../components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EditProfile = ({navigation}: any) => {
  return (
    <SafeView>
      <Button
        color="#7E7D7D"
        rounded
        width="50px"
        height="50px"
        absolute
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-ios-new" size={25} />
      </Button>
      <ViewStack center direction="column">
        <Text title="EditProfile" />
      </ViewStack>
    </SafeView>
  );
};

export default EditProfile;