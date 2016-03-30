const React = require('react-native');

const {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS
} = React;

const ActorScheduleView   = require('./src/views/screens/ActorScheduleView');
const LoginView           = require('./src/views/screens/LoginView');
const ProjectDetailView   = require('./src/views/screens/ProjectDetailView');
const ProjectListView     = require('./src/views/screens/ProjectListView');
const ProjectScheduleView = require('./src/views/screens/ProjectScheduleView');
const SettingsView        = require('./src/views/screens/SettingsView');

const Styles = require('./src/assets/Styles');

const App = React.createClass({
  routingTable: {
    'ActorSchedule': { title: "Actor Schedule", component: ActorScheduleView },
    'Login': { title: "Login", component: LoginView },
    'ProjectDetail': { title: "Project Detail", component: ProjectDetailView },
    'ProjectList': { title: "Projects", component: ProjectListView },
    'ProjectSchedule': { title: "Project Schedule", component: ProjectScheduleView },
    'Settings': { title: "Settings", component: SettingsView }
  },

  navTo: function(destinationName, props, rightButton, leftButton) {
    let item = this.routingTable[destinationName];
    if (props) {
			props.main = this;
			item.passProps = props;
		} else {
			item.passProps = {
				main: this,
			};
		}
    if (rightButton) {
      item.rightButtonTitle = rightButton.title;
      item.onRightButtonPress = rightButton.onPress;
    }
    if (leftButton) {
      item.leftButtonTitle = leftButton.title;
      item.onLeftButtonPress = leftButton.onPress;
    }
    this.refs.nav.push(item);
  },

  render: function() {
    return (
      <NavigatorIOS
        style = { Styles.navigationContainer }
        ref   = "nav"
        initialRoute = { {
          title: 'Login',
          component: LoginView,
          passProps: { main: this },
        } } />
    );
  }
});

module.exports = App;
