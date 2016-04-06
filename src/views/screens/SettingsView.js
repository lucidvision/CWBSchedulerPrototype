const React         = require('react-native');
const NavigationBar = require('react-native-navbar');
const Button        = require('@remobile/react-native-simple-button');
const {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  RecyclerViewBackedScrollView,
  Text,
  View,
} = React;

const Styles    = require('../../assets/Styles');

const SettingsView = React.createClass({
  render: function() {
    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigator.pop(),
    };

    return (
      <View>
        <NavigationBar
          title      = { { title: 'Settings' } }
          leftButton = { leftButtonConfig } />
        <Button onPress = { () => this.onLogoutPressed() }>
          <Text style = { Styles.button }>Logout</Text>
        </Button>
      </View>
    );
  },

  onLogoutPressed: function(event) {
    this.props.navigator.popToTop();
  },
});

module.exports = SettingsView;
