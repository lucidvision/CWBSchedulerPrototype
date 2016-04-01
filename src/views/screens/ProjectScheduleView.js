const _                = require('lodash');
const React            = require('react-native');
const Icon             = require('react-native-vector-icons/FontAwesome');
const Styles           = require('../../assets/Styles');
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
    id: 1,
    actor: "Brad Pitt",
    role: "Batman",
    date: "02/20/16",
    time: "3:30p",
    action: "C",
    status: "Yes",
    selected: false
  },
  {
    id: 2,
    actor: "Christian Bale",
    role: "Batman",
    date: "02/20/16",
    time: "3:50p",
    action: "C",
    status: "No",
    selected: false
  },
  {
    id: 3,
    actor: "Ben Affleck",
    role: "Batman",
    date: "02/20/16",
    time: "4:10p",
    action: "C",
    status: "Yes",
    selected: false
  }
]

const ProjectScheduleView = React.createClass({
  getInitialState: function () {
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    return {
      dataSource: ds.cloneWithRows(dummyAuditions),
      auditions: dummyAuditions
    };
  },

  onItemSelected: function(id) {
    console.log("onItemSelected");

    const auditions = _.map(_.cloneDeep(this.state.auditions), (audition) => {
      if (audition.id == id && audition.selected == false) {
        audition.selected = true;
      } else {
        audition.selected = false;
      }
      return audition;
    });

    console.log(auditions);

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(auditions),
      auditions: auditions
    });
  },

  render: function () {
    return (
      <View style = { Styles.screenContainer }>
        <ListView
          dataSource = { this.state.dataSource }
          renderRow  = { (audition) =>
            <View style = { audition.selected ? Styles.auditionItemSelected : Styles.auditionItem }>
              <View style = { Styles.auditionItemLeft }>
                <TouchableHighlight onPress = { () => this.onItemSelected(audition.id) }>
                  <View style = { Styles.auditionItemSelect }>
                    <Text>
                      { audition.actor } - { audition.role }
                    </Text>
                    <Text>
                      { audition.date } - { audition.time }
                    </Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View style = { Styles.auditionItemRight }>
                <Icon name = "phone" size = { 30 } />
                <Icon name = "file-text-o" size = { 30 } />
                <View style ={ audition.status == "Yes" ? Styles.yesResponse : Styles.noResponse }>
                  <Text>{ audition.status }</Text>
                </View>
              </View>
            </View>
          } />
      </View>
    );
  }
});

module.exports = ProjectScheduleView;
