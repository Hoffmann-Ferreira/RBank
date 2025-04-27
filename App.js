import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import React, {Component} from 'react';
import {
  Alert,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      sexes: ['Select','Female', 'Male', 'Other'],
      sexSelected: '',
      limitValue: 0,
      isStudent: false,
    };

    this.clear = this.clear.bind(this);
  }
  clear = () => {
    this.setState({
      name: '',
      age: '',
      sexSelected: '',
      limitValue: 0,
      isStudent: false,
    });
  };

  showAlert = () => {
    if (
      this.state.name !== '' &&
      this.state.age !== '' &&
      this.state.sexSelected !== 'Select' &&
      this.state.limitValue !== 0
    ) {
      Alert.alert(
        'Welcome',
        'We are very happy to have you as our customer!',
        [{text: 'Close', onPress: () => this.clear()}],
        {cancelable: true},
      );
    } else {
      Alert.alert(
        'Warning',
        'Fill in all the fields to open an account.',
        [{text: 'Close'}, {text: 'Cancel', onPress: () => this.clear()}],
        {cancelable: true},
      );
    }
  };

  render() {
    const sexSelector = this.state.sexes.map((item, index) => {
      return (
        <Picker.Item
          key={index}
          label={item}
          value={item}
          style={styles.pickerItem}
        />
      );
    });
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>RBank</Text>
        <View style={styles.contendContainer}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter Your Name"
            placeholderTextColor="#fff"
            value={this.state.name}
            onChangeText={value => this.setState({name: value})}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter Your Age"
            placeholderTextColor="#fff"
            keyboardType="numeric"
            value={this.state.age}
            onChangeText={value => this.setState({age: value})}
          />
          <Text style={styles.lebelPicker}>Select Your Gender:</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.sexSelected}
            dropdownIconColor="#fff"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({sexSelected: itemValue})
            }>
            {sexSelector}
          </Picker>
          <Text style={styles.lebelPicker}>Yare you studente?:</Text>
          <Switch
            value={this.state.isStudent}
            onValueChange={value => this.setState({isStudent: value})}
            trackColor={{true: '#fff'}}
            thumbColor={this.state.isStudent ? '#f4f3f4' : '#767577'}
          />
          <Text style={styles.lebelSlider}>Limit value request:</Text>
          <Slider
            minimumValue={0}
            maximumValue={1000}
            minimumTrackTintColor="#fff"
            thumbTintColor="#fff"
            onValueChange={value =>
              this.setState({limitValue: value.toFixed(2)})
            }
          />
          <Text style={styles.text}>$ {this.state.limitValue}</Text>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => this.showAlert()}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#9400d3',
  },
  logo: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Playwrite RO", cursive',
    fontStyle: 'italic',
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 90,
  },
  contendContainer: {
    flex: 3,
    gap: 16,
    color: '#fff',
    borderRadius: 10,
    paddingTop: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    borderRadius: 5,
  },
  lebelPicker: {
    color: '#fff',
    fontSize: 14,
    marginBottom: -22,
  },
  picker: {
    color: '#fff',
  },
  pickerItem: {
    color: '#9400d3',
  },
  lebelSlider: {
    color: '#fff',
    fontSize: 14,
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
  registerButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
