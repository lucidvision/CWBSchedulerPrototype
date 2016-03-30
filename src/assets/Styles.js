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
    paddingTop: 20
  },

  button: {
    backgroundColor: '#55FCFF',
    margin: 16,
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18
  },

  phone: {
    paddingLeft: 20
  },

  logo: {
    width: 100,
    height: 100
  },

  usernameInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    margin: 10,
    padding: 5
  },

  passwordInput: {
    borderWidth: 2,
    borderColor: 'gray',
    height: 40,
    margin: 10,
    padding: 5
  },

  projectListContainer: {
    flex: 1,
    paddingTop: 20
  },

  projectListItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderColor: 'gray',
    borderTopWidth: 0,
    borderBottomWidth: 1
  },

  projectListItemLeft: {
    flex: 0.65,
    flexDirection: 'column'
  },

  projectListItemRight: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },

  projectListItemRoles: {
    flex: 1,
    flexDirection: 'row'
  },

  projectListFont: {
    fontSize: 20
  },

  auditionContainer: {
    flex: 1,
    paddingTop: 20
  },

  auditionItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderColor: 'gray',
    borderTopWidth: 0,
    borderBottomWidth: 1,
    justifyContent: 'space-between'
  }
});

module.exports = Styles;
