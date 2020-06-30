
import OverviewTitle from './BizTitle.jsx';
import OverviewReview from './BizRating.jsx';
import OverviewServices from './BizServices.jsx';
import OverviewLastUpdated from './BizUpdated.jsx';

import styles from '../styles/BizOverview.css';

class OverviewInfo extends React.Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    const bizInfo = this.props.bizInfo;
    return (
      <div id='overview_biz' className= {styles.overview_container}>
        <OverviewTitle bizTitle={bizInfo.name} />
        <OverviewReview bizRate={bizInfo.stars} bizReviewCount={bizInfo.review_count} />
        <OverviewServices bizServices={bizInfo.categories} />
        <OverviewLastUpdated updatedAt={bizInfo.updatedAt} />
      </div>
    );
  }
}

export default OverviewInfo;