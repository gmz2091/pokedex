import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from '../utils';
import {useDarkMode} from '../hooks';

type TabNavigatorProps = {
  Profile: undefined;
  Pokemons: undefined;
  Pokedex: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorProps>();

const AppNavigator: React.FC = () => {
  const {isDarkMode, backgroundStyle} = useDarkMode();
  return (
    <Tab.Navigator
      initialRouteName="Pokemons"
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
          name={route.name as keyof TabNavigatorProps}
          component={route.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default AppNavigator;
