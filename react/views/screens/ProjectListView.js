const React = require('react-native');
const {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableHighlight
} = React;

const Styles = require('../../Styles');

let dummyProjects = [
  {
    name: "Batman Returns",
    actors: "30",
    availability: "20"
  },
  {
    name: "Forrest Gump",
    actors: "30",
    availability: "20"
  },
  {
    name: "Brian the Great",
    actors: "30",
    availability: "20"
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
      <View style = { Styles.centeredContainer }>
        <ListView
          dataSource = { this.state.dataSource }
          renderRow  = { (project) =>
            <TouchableHighlight onPress={() => this.onProjectSelected(project) }>
              <View style = { Styles.projectListItem }>
                <Text>
                  {project.name} - { project.actors } - { project.availability }
                </Text>
              </View>
            </TouchableHighlight>
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
