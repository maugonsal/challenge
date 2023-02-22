import React, {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';
import style from './style';

const ContactScreen: FC = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text>Contact Screen</Text>
    </SafeAreaView>
  );
};

export default ContactScreen;
