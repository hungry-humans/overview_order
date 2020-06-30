import React from 'react';
import styles from '../styles/BizServices.css';

class OverviewServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    const categories = this.props.bizServices;
    return (
      <div key='category' className={styles.service_types}>
        { categories ?
          categories.map((item, index) => (
            <span key={'service_category_' + index} className= {styles.service_type}>
              <a className={styles.biz_service}>
                {item}
              </a>
              { index < categories.length - 1 ? ',' : '' }
            </span>
          ))
          :
          <span className = {styles.service_type}>
            None
          </span>
        }

        <a href='/' className={styles.biz_service_edit}>
          Edit
        </a>
      </div>
    );
  }
}


export default OverviewServices;