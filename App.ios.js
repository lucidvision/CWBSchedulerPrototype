const React  = require('react-native');
const Styles = require('./src/assets/Styles');

const {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React;

const LoginView = require('./src/views/screens/LoginView');

const App = React.createClass({
  render: function () {
    return (
      <Navigator
        style = { Styles.navigationContainer }
        initialRoute = { { component: LoginView } }
        renderScene = { (route, navigator) => {
          return <route.component route = { route } navigator = { navigator } />
        } }
      />
    );
  }
});

module.exports = App;
