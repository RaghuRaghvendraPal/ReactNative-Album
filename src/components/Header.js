// Inport libraries

import React from 'react';
import { Text, View } from 'react-native';
// Create Component -: A Component ia javascript function that returns some amount of JSX
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F1F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 8, height: 30 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  }
};
// Make a Component to other parts of application
export default Header;
//  other files of project will use this Component
