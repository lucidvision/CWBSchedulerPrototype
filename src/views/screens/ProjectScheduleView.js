const _                = require('lodash');
const React            = require('react-native');
const Icon             = require('react-native-vector-icons/FontAwesome');
const Styles           = require('../../assets/Styles');
const { SegmentedControls } = require('react-native-radio-buttons');
const {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback
} = React;

const dummyAuditions = [
  {
    id: 1,
    actor: "Brad Pitt",
    role: "Batman",
    date: "02/20/16",
    time: "3:30p",
    action: "C",
    status: "Yes"
  },
  {
    id: 2,
    actor: "Christian Bale",
    role: "Batman",
    date: "02/20/16",
    time: "3:50p",
    action: "C",
    status: "No"
  },
  {
    id: 3,
    actor: "Ben Affleck",
    role: "Batman",
    date: "02/20/16",
    time: "4:10p",
    action: "C",
    status: "Yes"
  }
]

const ProjectScheduleView = React.createClass({
  getInitialState: function () {
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    return {
      dataSource: ds.cloneWithRows(dummyAuditions),
      auditions: dummyAuditions,
      isVisible: false,
    };
  },

  onExpandSelected: function(id) {
    const auditions = _.map(_.cloneDeep(dummyAuditions), (audition) => {
      if (audition.id == id) {
        audition.expand = "true";
        return audition;
      }
      return audition;
    });

    console.log(auditions);
    this.setState({ dataSource: this.state.dataSource.cloneWithRows(auditions) });
  },

  render: function () {
    const options = [
      "Confirm",
      "Regret",
      "?"
    ];

    function setSelectedOption(selectedOption){
      this.setState({ selectedOption });
    }

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
                  <Icon name = "file-text-o" size = { 30 } />
                  <View style ={ audition.status == "Yes" ? Styles.yesResponse : Styles.noResponse }>
                    <Text>Status: { audition.status }</Text>
                  </View>
                  <TouchableHighlight onPress = {() => this.onExpandSelected(audition.id) }>
                    <Icon name = "caret-down" size = { 30 } />
                  </TouchableHighlight>
                </View>
              </View>
              <View style={ audition.expand == "true" ? Styles.auditionItemExpand : Styles.auditionItemCollapse }>
                <SegmentedControls
                  options        = { options }
                  onSelection    = { setSelectedOption.bind(this) }
                  selectedOption = { this.state.selectedOption } />
              </View>
            </View>
          } />
      </View>
    );
  }
});

module.exports = ProjectScheduleView;
