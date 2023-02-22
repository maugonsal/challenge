import colors from '@common/colors';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerProgress,
} from '@react-navigation/drawer';

import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    ...StyleSheet.absoluteFillObject,
  },
});

const SideNav: FC<DrawerContentComponentProps> = props => {
  const progress = useDrawerProgress() as any;

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [0, 50], {
      extrapolateRight: Extrapolate.CLAMP,
    });

    return {
      transform: [{translateY}],
      borderRadius: 25,
    };
  });
  return (
    <Animated.View style={[style.wrapper, animatedStyle]}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Animated.View>
  );
};

export default SideNav;
