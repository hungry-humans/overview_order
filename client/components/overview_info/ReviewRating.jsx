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
      <div className='info_rating'>
        <div className='review_stars'>
          <div className='review_stars_img' style={ {backgroundPosition: `0 ${this.state.pos}`} }> </div>
        </div>

        <div className='review_counter cell'>
          <p className= 'review_counter'> {this.props.bizReviewCount} reviews </p>
        </div>

        <div className='review_detail'>
          <div className='review_detail_button'>
            <button className='tertiary small button' type='submit' value='submit' >
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