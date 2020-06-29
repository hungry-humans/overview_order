import React from 'react';
import axios from 'axios';

import OverviewInfo from './components/BizOverview.jsx';
import OverviewUIbuttons from './components/UiButtons.jsx';

// import url from '../server/config.js';
const baseURL = 'http://localhost:3001';

class App extends React.Component {
  constructor() {
    super();
    this.state = { };
  }

  componentDidMount() {
    this.getBizInfo();
  }

  getBizInfo() {
    const bizID = 1;
    axios.get(baseURL + '/search/' + 1)
      .then( response => {
        this.setState({bizInfo: response.data, loadComplete: true});
        console.log(response.data);
      });
  }

  render() {
    if (!this.state.loadComplete) {
      return ( <div> {"Loading"} </div> );
    } else {
      const bizInfo = this.state.bizInfo;
      return (
        <div id='overview' className='info_container'>
          <OverviewInfo bizInfo={bizInfo} />
          <OverviewUIbuttons bizInfo={bizInfo} />
        </div>
      );
    }
  }
}


ReactDOM.render( <App/>, document.getElementById('app'));