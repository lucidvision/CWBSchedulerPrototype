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

const Styles               = require('../../assets/Styles');
const ProjectListView      = require('./ProjectListView');
const AuditionScheduleView = require('./AuditionScheduleView');

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
          <Text style = { Styles.button }>Go!</Text>
        </TouchableHighlight>
      </View>
    );
  },

  onLoginPressed: function(event) {
    console.log("login pressed");

    if (this.state.type == "agent") {
      this.props.navigator.push({
        component: ProjectListView
      });
    } else if (this.state.type = "actor") {
      this.props.navigator.push({
        component: AuditionScheduleView
      });
    }
  }
});

module.exports = LoginView;
