const _           = require('lodash');
const React       = require('react-native');
const Icon        = require('react-native-vector-icons/FontAwesome');
const Styles      = require('../../assets/Styles');
const ListPopover = require('react-native-list-popover');
const {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableHighlight
} = React;

const dummyAuditions = [
  {
    actor: "Brad Pitt",
    role: "Batman",
    date: "02/20/16",
    time: "3:30p",
    action: "C"
  },
  {
    actor: "Christian Bale",
    role: "Batman",
    date: "02/20/16",
    time: "3:50p",
    action: "C"
  },
  {
    actor: "Ben Affleck",
    role: "Batman",
    date: "02/20/16",
    time: "4:10p",
    action: "C"
  }
]

const ProjectScheduleView = React.createClass({
  getInitialState: function () {
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return {
      dataSource: ds.cloneWithRows(dummyAuditions)
    };
  },

  render: function () {
    return (
      <View style = { Styles.screenContainer }>
        <ListView
          dataSource = { this.state.dataSource }
          renderRow  = { (audition) =>
            <View style = { Styles.auditionItem }>
              <View style = { Styles.auditionItemTop }>
                <View style = { Styles.auditionItemLeft }>
                  <Text>
                    { audition.date } - { audition.time }
                  </Text>
                  <Text>
                    { audition.actor } - { audition.role }
                  </Text>
                </View>
                <View style = { Styles.auditionItemRight }>
                  <Icon name = "phone" style = { Styles.phone } size = { 30 } />
                  <Text>Y</Text>
                  <Icon name = "file-text-o" size = { 30 } />
                </View>
              </View>
              <View>
                <ListPopover
                  list = { ["C", "R", "?"] } />
              </View>
            </View>
          } />
      </View>
    );
  }
});

module.exports = ProjectScheduleView;
