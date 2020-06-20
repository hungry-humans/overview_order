const React = require('react');

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>First App</h1>
        App - loaded.

      </div>
    );
  }
}


ReactDOM.render( <App/>, document.getElementById('app'));