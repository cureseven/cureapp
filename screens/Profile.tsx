import * as React from 'react';
import { View, Text } from 'react-native';

export function ProfileScreen({ route }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
}