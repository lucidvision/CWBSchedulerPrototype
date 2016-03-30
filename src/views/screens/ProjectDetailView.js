const _     = require('lodash');
const React = require('react-native');
const Icon   = require('react-native-vector-icons/FontAwesome');
const Styles = require('../../assets/Styles');
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

const ProjectDetailView = React.createClass({
  getInitialState: function () {
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return {
      dataSource: ds.cloneWithRows(dummyAuditions)
    };
  },

  render: function () {
    return (
      <View style = { Styles.auditionContainer }>
        <ListView
          dataSource = { this.state.dataSource }
          renderRow  = { (audition) =>
            <View style = { Styles.auditionItem }>
              <Text>
                { audition.actor }
              </Text>
              <Text>
                { audition.date }
              </Text>
              <Text>
                { audition.time }
              </Text>
            </View>
          } />
      </View>
    );
  }
});

module.exports = ProjectDetailView;
