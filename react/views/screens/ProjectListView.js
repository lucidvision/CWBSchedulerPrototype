const _     = require('lodash');
const React = require('react-native');
const {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableHighlight
} = React;

const Icon   = require('react-native-vector-icons/FontAwesome');
const Styles = require('../../Styles');


let dummyProjects = [
  {
    name: "Batman Returns",
    director: "Brad Richardson",
    roles: ["Batman", "Robin", "Joker"]
  },
  {
    name: "Forrest Gump",
    director: "Natalie Low",
    roles: ["Forrest", "Jenny", "Mom"]
  },
  {
    name: "Brian the Great",
    director: "Bill Gates",
    roles: ["Brian", "Susan", "Trevar"]
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
      <View style = { Styles.projectListContainer }>
        <ListView
          dataSource = { this.state.dataSource }
          renderRow  = { (project) =>
            <View style = { Styles.projectListItem }>
              <View style = { Styles.projectListItemUpper }>
                <Text>
                  { project.name } - { project.director }
                </Text>
                <Icon style = { Styles.phone } size = { 30 } name = "phone" />
              </View>
              <View style = { Styles.projectListItemLower }>
                { _.map(project.roles, (role, index) => {
                  if (index == project.roles.length-1)
                    return <Text key={ index }>{ role }</Text>
                  else
                    return <Text key={ index }>{ role }, </Text>
                }) }
              </View>
            </View>
           }
        />
      </View>
    );
  },

  onProjectSelected: function(project) {
    console.log("onProjectSelected")
    console.log(project);
  }
});

module.exports = ProjectListView;
