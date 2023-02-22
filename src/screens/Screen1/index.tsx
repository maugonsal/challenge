import {HomeNavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';
import React, {FC, useCallback} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import style from './style';

const Screen1: FC = () => {
  const navigation = useNavigation<HomeNavigationProp['navigation']>();

  const navigateToNextScreen = useCallback(() => {
    navigation.navigate('HOME_2');
  }, [navigation]);

  return (
    <SafeAreaView style={style.container}>
      <Text>Screen 1</Text>
      <Button onPress={navigateToNextScreen} title="Go to next screen" />
    </SafeAreaView>
  );
};

export default Screen1;
