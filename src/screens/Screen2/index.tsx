import {HomeNavigationProp} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';
import React, {FC, useCallback} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import style from './style';

const Screen2: FC = () => {
  const navigation = useNavigation<HomeNavigationProp['navigation']>();

  const navigateToNextScreen = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={style.container}>
      <Text>Screen 2</Text>
      <Button onPress={navigateToNextScreen} title="Go back" />
    </SafeAreaView>
  );
};

export default Screen2;
