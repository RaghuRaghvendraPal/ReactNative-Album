// Inport libraries

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//  ./ starts from Current directory
// Create Component -: A Component ia javascript function that returns some amount of JSX
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Raghav'} />
      <AlbumList />
    </View>
  );
};
// Both are same if i want

// const App = () => (
//     <Text>Raghvendra</Text>
// );
// Render component to screen-: ReactNative will do it
AppRegistry.registerComponent('albums', () => App);
