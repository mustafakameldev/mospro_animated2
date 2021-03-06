import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button} from 'react-native';
import {Screen} from '../components/screen';
import {ModalScreenList} from '../router';

interface Props {
  navigation: StackNavigationProp<ModalScreenList>;
}

export const Modal2Page: React.FC<Props> = ({navigation}) => {
  const onPressNextPage = () => navigation.navigate('Modal3Page');

  return (
    <Screen headerTitle="Modal 2 Page - Regular Animation" rightAction="back">
      <Button title="Next Page" onPress={onPressNextPage} />
    </Screen>
  );
};
