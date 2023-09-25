import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from '../utils';
const Tab = createBottomTabNavigator();

interface Props {
  isDarkMode: boolean;
  backgroundStyle: any;
}

const AppNavigator: React.FC<Props> = ({isDarkMode, backgroundStyle}) => {
  return (
    <Tab.Navigator
      initialRouteName="Progile"
      backBehavior="initialRoute"
      screenOptions={{
        tabBarActiveTintColor: isDarkMode ? '#fff' : '#000',
        tabBarInactiveTintColor: '#9A9A9A',
        tabBarStyle: {
          backgroundColor: backgroundStyle.backgroundColor,
          borderTopColor: 'transparent',
        },
      }}>
      {routes.map((route, index) => (
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          key={index}
          name={route.name}
          component={route.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default AppNavigator;
