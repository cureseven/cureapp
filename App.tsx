import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/Home';
import { DetailsScreen } from './screens/Details';
import { CreatePostScreen } from './screens/CreatePost';
import { ProfileScreen } from './screens/Profile';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={require('./assets/cure.jpg')}
    />
  );
}

function RootStack() {

  return (
    <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'pink',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{
          // title: 'CureApp',
          headerTitle: () => <LogoTitle />,
        }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{}} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} options={{
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={({ route }: any) =>
        ({ title: route.params.name, })} />
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