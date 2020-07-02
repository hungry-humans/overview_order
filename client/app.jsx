import React from 'react';
import axios from 'axios';
import styles from './styles/App.css';

import OverviewInfo from './components/BizOverview.jsx';
import OverviewUIbuttons from './components/UiButtons.jsx';

// import url from '../server/config.js';
const baseURL = 'http://ec2-3-23-87-183.us-east-2.compute.amazonaws.com:3001';
// const baseURL = 'http://localhost:3001';
// const baseURL = 'http://overview:3001';

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
        <>
          <div id='overview' className={styles.info_container}>
            <OverviewInfo bizInfo={bizInfo} />
            <OverviewUIbuttons bizInfo={bizInfo} />
            <div id='reviews-app' ></div>
          </div>
        </>
      );
    }
  }
}

if(document.getElementById('overview')) {
  ReactDOM.render( <App/>, document.getElementById('overview'));
} else {
  ReactDOM.render( <App/>, document.getElementById('app'));
}