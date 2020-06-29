import React from 'react';
import moment from 'moment';
import styles from '../styles/BizUpdated.css';

class OverviewLastUpdated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  svgUpdated () {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={styles.icon_svg}><path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 2a5 5 0 1 0 0 10A5 5 0 0 0 8 3zm0 3.86a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm0-2.74a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>);
  }

  render() {
    return (
      <div className={styles.last_update_flex}>
        <div className={styles.flex_content}>
          {this.svgUpdated()}
        </div>
        <div className={styles.flex_content}>
          <p className={styles.p_flat}>
            Hours updated {moment(this.props.updatedAt).fromNow()}
          </p>
        </div>
      </div>
    );
  }
}


export default OverviewLastUpdated;