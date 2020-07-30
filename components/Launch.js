import React from 'react';
import {Keyboard,View, Text, StyleSheet, Button,TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {MessageBarManager} from 'react-native-message-bar';

import styles from './loginstyle';

class Launch extends React.Component {
   onLoginPress() {
alert("dasd")
  }
  render() {
    return (
       <KeyboardAvoidingView style={styles.containerView} behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.loginScreenContainer}>
                <View style={styles.loginFormView}>
                <Text style={styles.logoText}>SMART CONTROLLER</Text>
                  <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                  <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
                  <Button
                    buttonStyle={styles.loginButton}
                      onPress={() =>
                              Actions.login({data: 'Custom data', title: 'Custom title'})
                            }
                    title="Login"
                  />
                
                </View>
        </View>
      </TouchableWithoutFeedback>
        {/* <Button
          title="Go to Login bRO"
          onPress={() =>
            Actions.login({data: 'Custom data', title: 'Custom title'})
          }
        /> */}
        {/* <Button title="Go to Register page" onPress={Actions.register} />
        <Button title="Display Error Modal" onPress={Actions.error} />
        <Button
          title="Display Lightbox"
          onPress={() => Actions.demo_lightbox({data: 'passed data'})}
        />
        <Button
          title="Go to CustomNavBar page"
          onPress={() => Actions.customNavBar()}
        />
        <Button
          title="MessageBar alert"
          onPress={() =>
            MessageBarManager.showAlert({
              title: 'Your alert title goes here',
              message: 'Your alert message goes here',
              alertType: 'success',
              // See Properties section for full customization
              // Or check `index.ios.js` or `index.android.js` for a complete example
            })
          }
        /> */}
        {/* <Button title="Go to TabBar page" onPress={Actions.drawer} /> */}
       </KeyboardAvoidingView>
      
    );
  }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//   },
// });

export default Launch;
