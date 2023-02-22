import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import React, {FC, useCallback} from 'react';
import {StyleSheet} from 'react-native';

import colors from '@common/colors';
import SideNav from '@common/components/SideNav';
import ContactScreen from '../screens/Contact';
import BottomTabNavigator from './BottomTabNavigator';
import {DrawerParamList} from './types';

const Drawer = createDrawerNavigator<DrawerParamList>();

const style = StyleSheet.create({
  drawer: {backgroundColor: colors.white},
});

const DrawerNavigator: FC = () => {
  const drawerContent = useCallback((props: DrawerContentComponentProps) => {
    return <SideNav {...props} />;
  }, []);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'back',
        drawerStyle: style.drawer,
        overlayColor: 'transparent',
      }}
      drawerContent={drawerContent}>
      <Drawer.Screen
        name={'DRAWER_HOME'}
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Start',
          title: '',
        }}
      />
      <Drawer.Screen
        name={'DRAWER_CONTACT'}
        component={ContactScreen}
        options={{
          drawerLabel: 'Contact',
          title: '',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
