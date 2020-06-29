const React = require('react');
const axios = require('axios');
const OverviewTitle = require('./components/overview_info/BizTitle.jsx');
const OverviewReview = require('./components/overview_info/BizRating.jsx');
const OverviewServices = require('./components/overview_info/BizServices.jsx');
const OverviewLastUpdated = require('./components/overview_info/BizUpdated.jsx');

const OverviewUIbuttons = require('./components/overview_ui/UiButtons.jsx');
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
      console.log('loading');
      return ( <div> {"Loading"} </div> );
    } else {
      return (
        <div id='overview' className='info_container'>
          <div id='overview_biz' className= 'margin_bottom_24px'>
            <OverviewTitle bizTitle={this.state.bizInfo.name} />
            <OverviewReview bizRate={this.state.bizInfo.stars} bizReviewCount={this.state.bizInfo.review_count} />
            <OverviewServices bizServices={this.state.bizInfo.categories} />
            <OverviewLastUpdated updatedAt={this.state.bizInfo.updatedAt} />
          </div>
          <OverviewUIbuttons bizInfo={this.state.bizInfo}/>
          {/* {this.state.bizInfo.name} */}
        </div>
      );
    }
  }
}


ReactDOM.render( <App/>, document.getElementById('app'));