const React         = require('react-native');
const NavigationBar = require('react-native-navbar');
const Button        = require('@remobile/react-native-simple-button');
const {
  Image,
  ListView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} = React;

const Styles = require('../../assets/Styles');

const settingsList = [
  {
    name: "Logout"
  }
]

const SettingsView = React.createClass({
  getInitialState: function () {
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
    return {
      dataSource: ds.cloneWithRows(settingsList)
    }
  },

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
        <ListView
          dataSource      = { this.state.dataSource }
          renderRow       = { this._renderRow }
          renderSeparator = { this._renderSeperator } />
      </View>
    );
  },

  _renderRow: function (setting) {
    return (
      <TouchableHighlight onPress = { () => this.onLogoutPressed() }>
        <View style = { Styles.settingItem }>
          <Text style = { Styles.settingItemText }>Logout</Text>
        </View>
      </TouchableHighlight>
    )
  },

  onLogoutPressed: function (event) {
    this.props.navigator.popToTop();
  },
});

module.exports = SettingsView;
