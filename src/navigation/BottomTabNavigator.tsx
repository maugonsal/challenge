import colors from '@common/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDrawerProgress} from '@react-navigation/drawer';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import ContactScreen from '../screens/Contact';
import HomeStack from './HomeStack';
import {BottomTabParamList} from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const style = StyleSheet.create({
  tabWrapper: {backgroundColor: colors.white, ...StyleSheet.absoluteFillObject},
});

const BottomTabNavigator: FC = () => {
  const progress = useDrawerProgress() as any;

  const animatedStyle = useAnimatedStyle(() => {
    const rotation = interpolate(progress.value, [0, 1], [0, -10], {
      extrapolateRight: Extrapolate.CLAMP,
    });

    return {
      transform: [{rotateZ: `${rotation}deg`}],
      borderRadius: 30,
    };
  });

  return (
    <Animated.View style={[style.tabWrapper, animatedStyle]}>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="HOME_TAB"
          component={HomeStack}
          options={{tabBarLabel: 'Home', tabBarIcon: () => null}}
        />
        <Tab.Screen
          name="CONTACT_TAB"
          component={ContactScreen}
          options={{tabBarLabel: 'Contact', tabBarIcon: () => null}}
        />
      </Tab.Navigator>
    </Animated.View>
  );
};

export default BottomTabNavigator;
