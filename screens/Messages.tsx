import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text } from 'react-native';

export function MessagesScreen({ route }:any) {
const navigation = useNavigation<any>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messages Screen</Text>
      <Button onPress={() => navigation.navigate('Home', { screen: 'Home' })}>Go to Home</Button>
    </View>
  );
}