import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from '@react-navigation/elements';

export function HomeScreen({ route }: any) {
    const navigation = useNavigation<any>();
    React.useEffect(() => {
        if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
            console.log('New post: ' + route.params?.post);
        }
    }, [route.params?.post]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>cureScreen</Text>
            <Button
                onPress={() => {
                    console.log(route.params);
                    navigation.navigate('Details', {
                        otherParam: 'anything you want here',
                        itemId: Math.floor(Math.random() * 100),
                    });
                }}>
                Random itemId Detail
            </Button>
            <Button onPress={() => navigation.navigate('Details',
                { itemId: 1, otherParam: 'anything you want here' })}>Go to Details</Button>
            <Button onPress={() => navigation.goBack()}>Go back</Button>
            <Button onPress={() => navigation.popTo('Home')}>Go to Home</Button>
            <Button onPress={() => navigation.popToTop()}>
                Go back to first screen in stack
            </Button>
            <Button onPress={() => navigation.navigate('CreatePost')}>Create Post</Button>
            <Button onPress={() => {
                navigation.navigate('Profile', { name: 'Jane' });
                navigation.setOptions({ title: 'Jane' });
            }}>
                Profile
            </Button>

        </View>
    );
}