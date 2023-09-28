import React from 'react';
import {SafeView, Text, Button, ViewStack, TextField} from '../../components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Calendar} from 'react-native-calendars';
import {useModifyAccount, useUtils} from '../../hooks';

const EditProfile = ({navigation}: any) => {
  const {width, setDate} = useUtils();
  const {dataUsr, setDataUsr, modifyAccount} = useModifyAccount();
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
      <ViewStack>
        <TextField
          placeholder="Nombre"
          onChangeText={text => setDataUsr({...dataUsr, fullName: text})}
          value={dataUsr.fullName}
        />
        <Calendar
          style={{width: width - 50}}
          current={dataUsr.birthdate}
          onDayPress={day => {
            setDate(day.dateString);
            setDataUsr({...dataUsr, birthdate: day.dateString});
          }}
          markedDates={{
            [dataUsr.birthdate]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: '#16577B',
              selectedTextColor: 'white',
            },
          }}
        />
      </ViewStack>
      <ViewStack>
        <Button onPress={() => modifyAccount()} color="#16577B" height="50px">
          <Text title="Save" />
        </Button>
      </ViewStack>
    </SafeView>
  );
};

export default EditProfile;
