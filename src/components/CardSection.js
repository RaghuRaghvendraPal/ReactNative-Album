import React from 'react';
import { View } from 'react-native';
//  ./ starts from Current directory
// Create Component -: A Component ia javascript function that returns some amount of JSX
const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  }
};


export default CardSection;
