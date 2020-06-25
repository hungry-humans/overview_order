const React = require('react');
const axios = require('axios');

const OverviewTitle = require('./components/Title.jsx');
const OverviewReview = require('./components/ReviewRating.jsx');
const OverviewServices = require('./components/TypeofServices.jsx');
const OverviewLastUpdated = require('./components/UpdateChecker.jsx');

const OverviewUIbuttons = require('./components/UI_buttons.jsx');

const baseURL = 'http://localhost:3001';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bizInfo: {},
      loadComplete: false
    };
    // this.getBizInfo = this.getBizInfo.bind(this);
  }

  componentDidMount() {
    // this.getBizInfo.call(this);
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
      console.log('loading');
      return ( <div> {"Loading"} </div> );
    } else {
      return (
        <div id='overview' class='info_container'>
          <div id='overview_biz' class= 'margin_bottom_24px'>
            <OverviewTitle bizTitle={this.state.bizInfo.name} />
            <OverviewReview bizRate={this.state.bizInfo.stars} bizReviewCount={this.state.bizInfo.review_count} />
            <OverviewServices bizServices={this.state.bizInfo.categories} />
            <OverviewLastUpdated updatedAt={this.state.bizInfo.updatedAt} />
          </div>
          <OverviewUIbuttons />
          {/* {this.state.bizInfo.name} */}
        </div>
      );
    }
  }
}


ReactDOM.render( <App/>, document.getElementById('app'));