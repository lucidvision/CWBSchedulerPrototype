const React = require('react-native');
const { StyleSheet } = React;

const Styles = StyleSheet.create({
  navigationContainer: {
      flex: 1,
  },

  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },

  button: {
      backgroundColor: '#55FCFF',
      margin: 16,
      padding: 12,
      paddingLeft: 20,
      paddingRight: 20,
      fontSize: 18,
  },

  usernameInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 2,
      margin: 10,
      padding: 5,
  },

  passwordInput: {
      borderWidth: 2,
      borderColor: 'gray',
      height: 40,
      margin: 10,
      padding: 5,
  }
});

module.exports = Styles;