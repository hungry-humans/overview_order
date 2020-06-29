
const OverviewTitle = require('./BizTitle.jsx');
import OverviewReview from './BizRating.jsx';
const OverviewServices = require('./BizServices.jsx');
const OverviewLastUpdated = require('./BizUpdated.jsx');

class OverviewInfo extends React.Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    const bizInfo = this.props.bizInfo;
    return (
      <div id='overview_biz' className= 'margin_bottom_24px'>
        <OverviewTitle bizTitle={bizInfo.name} />
        <OverviewReview bizRate={bizInfo.stars} bizReviewCount={bizInfo.review_count} />
        <OverviewServices bizServices={bizInfo.categories} />
        <OverviewLastUpdated updatedAt={bizInfo.updatedAt} />
      </div>
    );
  }
}

export default OverviewInfo;