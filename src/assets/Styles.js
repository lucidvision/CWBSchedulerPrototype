const React = require('react-native');
const { StyleSheet } = React;

const Styles = StyleSheet.create({
  navigationContainer: {
    flex: 1
  },

  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },

  screenContainer: {
    flex: 1,
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

  actionSheet: {

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

  projectListItem: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    padding: 10,
    borderColor: 'gray',
    borderTopWidth: 0,
    borderBottomWidth: 1
  },

  projectListItemLeft: {
    flex: 0.6,
    flexDirection: 'column'
  },

  projectListItemRight: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35
  },

  projectListItemRoles: {
    flex: 1,
    flexDirection: 'row'
  },

  projectListFont: {
    fontSize: 15
  },

  activeActions: {
    backgroundColor: '#55FCFF',
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 10
  },

  inactiveActions: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 10
  },

  auditionItem: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    padding: 10,
    borderColor: 'gray',
    borderTopWidth: 0,
    borderBottomWidth: 1,
    justifyContent: 'space-between'
  },

  auditionItemSelected: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    padding: 10,
    borderColor: 'gray',
    borderTopWidth: 0,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    backgroundColor: '#00FFFF'
  },

  auditionItemLeft: {
    flex: 0.6,
    flexDirection: 'column'
  },

  auditionItemRight: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35
  },

  auditionItemSelect: {
    flex: 1
  },

  yesResponse: {
    backgroundColor: '#00CC33',
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 10,
    width: 60,
    alignItems: 'center'
  },

  noResponse: {
    backgroundColor: '#FF0000',
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 10,
    width: 60,
    alignItems: 'center'
  },
});

module.exports = Styles;
