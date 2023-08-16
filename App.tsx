import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView className='flex-1 justify-center items-center bg-red-700'>
      <Text className='text-white text-2xl font-bold'>Hello world</Text>
    </SafeAreaView>
  );
}

export default App;
