const React = require('react-native');
const { AppRegistry } = React;
const App = require('./App');

const CWBScheduler = React.createClass({
  render: function () {
    return (
      <App />
    )
  }
});

AppRegistry.registerComponent('CWBScheduler', () => CWBScheduler);
