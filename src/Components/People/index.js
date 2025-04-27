import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class People extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contend}>
          <Text style={styles.text}>{this.props.data.name}</Text>
          <Text style={styles.text}>{this.props.data.email}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contend:{
    backgroundColor: '#000',
    marginBottom:20,
    height: 200,

  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
export default People;
