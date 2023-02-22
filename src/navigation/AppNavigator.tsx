import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import DrawerNavigator from './DrawerNavigator';

const AppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
