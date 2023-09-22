import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../Screens';
const Stack = createStackNavigator();

interface Props {
  isDarkMode: boolean;
  backgroundStyle: any;
}

const AppNavigator: React.FC<Props> = ({isDarkMode, backgroundStyle}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{headerShown: false}}
        initialParams={{isDarkMode, backgroundStyle}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
