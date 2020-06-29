import React from 'react';
import styles from '../styles/BizTitle.css';

class OverviewTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  svgClaimed() {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className={styles.icon_svg}><path d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm3.96 6.28l-4.808 4.807-3.112-3.11a.8.8 0 1 1 1.13-1.132l1.982 1.98 3.677-3.677a.8.8 0 1 1 1.13 1.13z"></path></svg>);
  }

  render() {
    return (
      <div id='bizTitle' >
        <h1 className={styles.title_text}> {this.props.bizTitle} </h1>
        <span>
          <span className={styles.icon_claimed}>
            {this.svgClaimed()}
          </span>
          <span className={styles.info_claimed}>Claimed</span>
        </span>
      </div>
    );
  }
}


export default OverviewTitle;