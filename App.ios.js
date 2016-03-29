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

const ActorScheduleView   = require('./react/views/screens/ActorScheduleView');
const LoginView           = require('./react/views/screens/LoginView');
const ProjectDetailView   = require('./react/views/screens/ProjectDetailView');
const ProjectListView     = require('./react/views/screens/ProjectScheduleView');
const ProjectScheduleView = require('./react/views/screens/ProjectScheduleView');

const Styles = require('./react/Styles');

const App = React.createClass({
  routingTable: {
    'ActorSchedule': { title: "ActorSchedule", component: ActorScheduleView },
    'Login': { title: "Login", component: LoginView },
    'ProjectDetail': { title: "ProjectDetail", component: ProjectDetailView },
    'ProjectList': { title: "ProjectListView", component: ProjectListView },
    'ProjectSchedule': { title: "ProjectSchedule", component: ProjectScheduleView }
  },

  navTo: function(destinationName, props, rightButton, leftButton) {
    let item = this.routingTable[destinationName];
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
        initialRoute = { { title: 'Login', component: LoginView } } />
    );
  }
});

module.exports = App;
