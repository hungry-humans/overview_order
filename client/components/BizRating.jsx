import React from 'react';
import styles from '../styles/BizRating.css';

class OverviewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: 0
    };

  }

  componentDidMount() {
    // console.log(this.props.bizRate);
    const digitN = Math.floor(this.props.bizRate);
    const decimalN = this.props.bizRate - digitN;
    this.setState({
      pos: (digitN * -64) + ( decimalN > 0.5 ? 32 : 0)
    });
    console.log('styles', styles);

  }

  render() {
    return (
      <div className = {styles.info_rating}>
        <div className={styles.review_stars}>
          <div
            className={styles.review_stars_img}
            style={ {backgroundPosition: `0 ${this.state.pos}`} } />
        </div>

        <div className={styles.review_counter}>
          <p> {this.props.bizReviewCount} reviews </p>
        </div>

        <div className={styles.review_detail}>
          <div className={styles.review_detail_button}>
            <button className={styles.tertiary} type='submit' value='submit' >
              <span>
                Details
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OverviewReview;