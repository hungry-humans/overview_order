const React = require('react');


class OverviewServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    const categories = this.props.bizServices;
    return (
      <div class = 'service_types'>
        { categories ?
          categories.map((item, index) => (
            <span class = 'service_type'>
              <a class='biz_service'>
                {item}
              </a>
              { index < categories.length - 1 ? ',' : '' }
            </span>
          ))
          :
          <span class = 'service_type'>
            None
          </span>
        }

        <a href='/' class='biz_service edit' target name rel>
          Edit
        </a>
      </div>
    );
  }
}


module.exports = OverviewServices;