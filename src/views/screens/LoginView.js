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

const Styles = require('../../assets/Styles');

const LoginView = React.createClass({
  getInitialState: function() {
    return {
      username: "brianpark@cwb.com",
      password: "password",
      type: "agent"
    }
  },

  render: function () {
    return (
      <View style={ Styles.centeredContainer }>
        <Image
          source = { require('../../../src/assets/images/CWB_logo.png') }
          style  = { Styles.logo } />
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
            Go!
          </Text>
        </TouchableHighlight>
      </View>
    );
  },

  onLoginPressed: async function(event) {
    console.log("login pressed");

    let main = this.props.main;
    if (this.state.type == "agent") {
      main.navTo("ProjectList", {}, {
        title: "Settings",
        onPress: function() {
          console.log("onRightButtonPressed");
          main.navTo("Settings");
        }
      });
    } else if (this.state.type = "actor") {
      main.navTo("ActorSchedule", {}, {
        title: "Settings",
        onPress: function() {
          console.log("onRightButtonPressed");
          main.navTo("Settings");
        }
      });
    }
  }
});

module.exports = LoginView;
