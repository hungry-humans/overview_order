const React = require('react');


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
      pos: (digitN * -32) - ( decimalN > 0.5 ? 1 : 0)
    });
    // console.log(this.state.pos);
  }

  render() {
    return (
      <div class='info_rating'>
        <div class='review_stars'>
          <div class='review_stars_img' style={ {backgroundPosition: `0 ${this.state.pos}`} }> </div>
        </div>

        <div class='review_counter cell'>
          <p class = 'review_counter'> {this.props.bizReviewCount} reviews </p>
        </div>

        <div class='review_detail'>
          <div class='review_detail_button'>
            <button class='tertiary small button'  type='submit' value='submit' >
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


module.exports = OverviewReview;