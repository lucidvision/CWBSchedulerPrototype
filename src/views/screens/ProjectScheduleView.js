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
  UIManager,
  ActionSheetIOS,
  TouchableHighlight,
} = React;

const dummysubmissions = [
  {
    id: 1,
    actor: "Brad Pitt",
    role: "Batman",
    date: "02/20/16",
    time: "3:30p",
    status: "Yes",
    selected: false
  },
  {
    id: 2,
    actor: "Christian Bale",
    role: "Batman",
    date: "02/20/16",
    time: "3:50p",
    status: "No",
    selected: false
  },
  {
    id: 3,
    actor: "Ben Affleck",
    role: "Batman",
    date: "02/20/16",
    time: "4:10p",
    status: "Yes",
    selected: false
  }
];

var BUTTONS = [
  'Forward to actor',
  'Forward to casting',
  'Set status to "Yes"',
  'Set status to "No"',
  'Set status to "Wait"',
  'Cancel'
];

var CANCEL_INDEX = 5;

const ProjectScheduleView = React.createClass({
  getInitialState: function () {
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    return {
      dataSource: ds.cloneWithRows(dummysubmissions),
      submissions: dummysubmissions,
      status: "",
      clicked: 'none'
    };
  },

  render: function () {
    return (
      <View style = { Styles.screenContainer }>
        <ListView
          dataSource      = { this.state.dataSource }
          renderHeader    = { this._renderHeader }
          renderRow       = { this._renderRow }
          renderSeparator = { this._renderSeperator } />
        <Text onPress = { this.showActionSheet } style = { Styles.button }>
          Actions
        </Text>
      </View>
    );
  },

  _renderHeader: function() {
    return (
      <View style = { Styles.headerContainer }>
        <Text style = { Styles.header }>Michael Bay</Text>
        <Icon name = "phone" size = { 30 } />
      </View>
    )
  },

  _renderRow: function(submission) {
    return (
      <View style = { submission.selected ? Styles.submissionItemSelected : Styles.submissionItem }>
        <View style = { Styles.submissionItemLeft }>
          <TouchableHighlight onPress = { () => this.onItemSelected(submission.id) }>
            <View style = { Styles.submissionItemSelect }>
              <Text>{ submission.actor } - { submission.role }</Text>
              <Text>{ submission.date } - { submission.time }</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style = { Styles.submissionItemRight }>
          <Icon name = "phone" size = { 30 } />
          <Icon name = "file-text-o" size = { 30 } />
          <View style ={ submission.status == "Yes" ? Styles.yesResponse : Styles.noResponse }>
            <Text>{ submission.status }</Text>
          </View>
        </View>
      </View>
    );
  },

  _renderSeperator: function(sectionID, rowID) {
    return (
      <View key = { `${sectionID}-${rowID}` } style = { Styles.separator } />
    )
  },

  onItemSelected: function(id) {
    console.log("onItemSelected");

    const submissions = _.map(_.cloneDeep(this.state.submissions), (submission) => {
      if (submission.id == id && submission.selected == false) {
        submission.selected = true;
      } else if (submission.id == id && submission.selected == true) {
        submission.selected = false;
      }

      return submission;
    });

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(submissions),
      submissions: submissions
    });
  },

  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  },
});

module.exports = ProjectScheduleView;
