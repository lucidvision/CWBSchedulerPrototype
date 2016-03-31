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
    alignSelf: 'center'
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
    flexDirection: 'column',
    padding: 10,
    borderColor: 'gray',
    borderTopWidth: 0,
    borderBottomWidth: 1,
    justifyContent: 'space-between'
  },

  auditionItemTop: {
    flex: 1,
    flexDirection: 'row',
  },

  auditionItemLeft: {
    flex: 0.4,
    flexDirection: 'column'
  },

  auditionItemRight: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },

  auditionItemExpand: {
    margin: 20
  },

  auditionItemCollapse: {
    opacity: 0
  },

  yesResponse: {
    backgroundColor: '#00CC33',
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 10
  },

  noResponse: {
    backgroundColor: '#FF0000',
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 10
  },
});

module.exports = Styles;
