import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import {HomeStackParamList} from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack: FC = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      component={Screen1}
      name="HOME"
      options={{title: 'Screen 1'}}
    />
    <Stack.Screen
      component={Screen2}
      name="HOME_2"
      options={{title: 'Screen 2'}}
    />
  </Stack.Navigator>
);

export default HomeStack;
