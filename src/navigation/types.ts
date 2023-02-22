import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type DrawerParamList = {
  DRAWER_HOME: undefined;
  DRAWER_CONTACT: undefined;
};

export type BottomTabParamList = {
  HOME_TAB: undefined;
  CONTACT_TAB: undefined;
};

export type HomeStackParamList = {
  HOME: undefined;
  HOME_2: undefined;
};

export type HomeNavigationProp = NativeStackScreenProps<HomeStackParamList>;
