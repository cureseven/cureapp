import * as React from 'react';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

export function CreatePostScreen({ route }:any) {
  const navigation = useNavigation<any>();
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        onPress={() => {
          // Pass params back to home screen
          navigation.popTo('Home', { post: postText });
        }}
      >
        Done
      </Button>
    </>
  );
}