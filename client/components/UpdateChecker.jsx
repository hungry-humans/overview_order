const React = require('react');
const moment = require('moment');

class OverviewLastUpdated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="last_update_biz flex_box">
        <div class="flex_content">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="icon_svg"><path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 2a5 5 0 1 0 0 10A5 5 0 0 0 8 3zm0 3.86a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm0-2.74a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>
        </div>
        <div class="flex_content">
          <p class="p_flat">
            Hours updated {moment(this.props.updatedAt).fromNow()}
          </p>
        </div>
      </div>
    );
  }
}


module.exports = OverviewLastUpdated;