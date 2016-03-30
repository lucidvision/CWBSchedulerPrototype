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

const dummyProjects = [
  {
    name: "Batman Returns",
    director: "Brad Richardson",
    roles: ["Batman", "Robin", "Joker"],
    actions: 3
  },
  {
    name: "Forrest Gump",
    director: "Natalie Low",
    roles: ["Forrest", "Jenny", "Mom"],
    actions: 1
  },
  {
    name: "Brian the Great",
    director: "Bill Gates",
    roles: ["Brian", "Susan", "Trevar"],
    actions: 2
  }
]

const ProjectListView = React.createClass({
  getInitialState: function () {
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return {
      dataSource: ds.cloneWithRows(dummyProjects)
    };
  },

  render: function () {
    return (
      <View style = { Styles.screenContainer }>
        <ListView
          dataSource = { this.state.dataSource }
          renderRow  = { (project) =>
            <View style = { Styles.projectListItem }>
              <View style = { Styles.projectListItemLeft }>
                <Text style = { Styles.projectListFont }>
                  { project.name } - { project.director }
                </Text>
                <View style = { Styles.projectListItemRoles }>
                  { _.map(project.roles, (role, index) => {
                    if (index == project.roles.length-1)
                      return <Text key={ index } style = { Styles.projectListFont }>{ role }</Text>
                    else
                      return <Text key={ index } style = { Styles.projectListFont }>{ role }, </Text>
                  }) }
                </View>
              </View>
              <View style = { Styles.projectListItemRight }>
                <Icon name = "phone" style = { Styles.phone } size = { 30 } />
                <View style = { project.actions > 0 ? Styles.activeActions : Styles.inactiveActions }>
                  <Text>{ project.actions }</Text>
                </View>
                <TouchableHighlight onPress = { this.onProjectSelected }>
                  <Icon
                    name  = "chevron-circle-right"
                    size  = { 30 } />
                </TouchableHighlight>
              </View>
            </View>
          } />
      </View>
    );
  },

  onProjectSelected: async function(event) {
    console.log("onProjectSelected");

    this.props.main.navTo("ProjectSchedule");
  }
});

module.exports = ProjectListView;
