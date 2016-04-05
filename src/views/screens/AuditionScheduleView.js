const React         = require('react-native');
const Icon          = require('react-native-vector-icons/FontAwesome');
const NavigationBar = require('react-native-navbar');
const {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableHighlight
} = React;

const Styles       = require('../../assets/Styles');
const SettingsView = require('./SettingsView');

const dummyAuditions = [
  {
    agent: "Trisha Agentface",
    role: "Batman",
    date: "02/20/16",
    time: "3:30p",
    action: "C"
  },
  {
    agent: "Trisha Agentface",
    role: "Batman",
    date: "02/20/16",
    time: "3:50p",
    action: "C"
  },
  {
    agent: "Trisha Agentface",
    role: "Batman",
    date: "02/20/16",
    time: "4:10p",
    action: "C"
  }
]

const AuditionScheduleView = React.createClass({
  getInitialState: function () {
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2});
    return {
      dataSource: ds.cloneWithRows(dummyAuditions)
    };
  },

  render: function () {
    const rightButtonConfig = {
      title: 'Settings',
      handler: () => this.props.navigator.push({
        component: SettingsView,
      }),
    };

    return (
      <View style = { Styles.screenContainer }>
        <NavigationBar
          title = { { title: "Projects" } }
          rightButton = { rightButtonConfig } />
        <ListView
          dataSource      = { this.state.dataSource }
          renderRow       = { this._renderRow }
          renderSeparator = { this._renderSeperator } />
      </View>
    );
  },

  _renderHeader: function () {
    return (
      <View style = { Styles.headerContainer }>
        <Text style = { Styles.header }>Trisha Agentface</Text>
        <Icon name = "phone" size = { 30 } />
      </View>
    );
  },

  _renderRow: function (audition) {
    return (
      <View style = { Styles.auditionItem }>
        <View style = { Styles.auditionItemTop }>
          <View style = { Styles.auditionItemLeft }>
            <Text>{ audition.role } - { audition.agent }</Text>
            <Text>{ audition.date } - { audition.time }</Text>
          </View>
          <View style = { Styles.auditionItemRight }>
            <Icon name = "phone" size = { 30 } />
            <Icon name = "file-text-o" size = { 30 } />
          </View>
        </View>
        <View style = { Styles.auditionItemBottom }>
          <Text style = { Styles.button }>Yes</Text>
          <Text style = { Styles.button }>No</Text>
        </View>
      </View>
    );
  },

  _renderSeperator: function (sectionID, rowID) {
   return (
     <View key = { `${sectionID}-${rowID}` } style = { Styles.separator } />
   );
  }
});

module.exports = AuditionScheduleView;
