// Inport libraries

import React from 'react';
import { View } from 'react-native';
// Create Component -: A Component ia javascript function that returns some amount of JSX
const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 1,
    position: 'relative',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};
// Make a Component to other parts of application
export default Card;
//  other files of project will use this Component