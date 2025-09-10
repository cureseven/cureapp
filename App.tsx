import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/Home';
import { DetailsScreen } from './screens/Details';
import { CreatePostScreen } from './screens/CreatePost';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle: { backgroundColor: 'sandybrown' }}}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'CureApp' }} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}