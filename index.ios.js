const React = require('react-native');
const { AppRegistry } = React;
const App = require('./app');

const CWBScheduler = React.createClass({
  render: function () {
    return (
      <App />
    )
  }
});

AppRegistry.registerComponent('CWBScheduler', () => CWBScheduler);
