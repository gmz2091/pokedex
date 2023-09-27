import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditProfile, DetailPokemon} from '../Screens';
import AppNavigator from './AppNavigator';
import {Pokemon} from '../interface';
import {NavigatorScreenParams} from '@react-navigation/native';

type StackNavigatorProps = {
  AppNavigator: undefined;
  EditProfile: undefined;
  DetailPokemon: NavigatorScreenParams<Pokemon>;
};

const Stack = createNativeStackNavigator<StackNavigatorProps>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AppNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppNavigator" component={AppNavigator} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="DetailPokemon" component={DetailPokemon} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
