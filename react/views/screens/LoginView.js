const React = require('react-native');
const {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} = React;

const Styles = require('../../Styles');

const LoginView = React.createClass({
  getInitialState: function() {
    return {
      username: "brianpark@cwb.com",
      password: "password"
    }
  },

  render: function () {
    return (
      <View style={ Styles.centeredContainer }>
        <TextInput
          style        = { Styles.usernameInput }
          value        = { this.state.username }
          onChangeText = { (username) => this.setState({ username }) } />
        <TextInput
          style        = { Styles.passwordInput }
          value        = { this.state.password }
          onChangeText = { (password) => this.setState({ password }) } />
        <TouchableHighlight onPress = { () => this.onLoginPressed() }>
          <Text style = { Styles.button }>
            Forgot Password
          </Text>
        </TouchableHighlight>
      </View>
    );
  },

  onLoginPressed: async function() {
    console.log("login pressed");
  }
});
