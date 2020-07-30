import React from 'react';
import {View, Text, StyleSheet,Switch, SafeAreaView,TextInput} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
// import RNSpeedometer from 'react-native-speedometer'
import RNSpeedometer from 'react-native-speedometer';
import SwitchSelector from 'react-native-switch-selector';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class extends React.Component {
  state = {switchValue:false,value: 0,}
 


onChange = (value) => this.setState({ value: parseInt(value) });
  render() {
      const options = [
          { label: 'ON', value: '1' },
          { label: 'OFF', value: '0' }
          
      ];

    return (
      <View style={[styles.container, this.props.style]}>
           <RNSpeedometer value={75} size={200}/><Text>{'\n'}</Text>
           <SwitchSelector options={options} initial={0}  onPress={value => console.log(`Call onPress with value: ${value}`)}/>

       
        {/* <Button onPress={Actions.pop}>Logout</Button> */}
      </View>
    );
  }
}
