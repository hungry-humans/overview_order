const React = require('react');


class OverviewServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    const categories = this.props.bizServices;
    return (
      <div className= 'service_types'>
        { categories ?
          categories.map((item, index) => (
            <span className= 'service_type'>
              <a className='biz_service'>
                {item}
              </a>
              { index < categories.length - 1 ? ',' : '' }
            </span>
          ))
          :
          <span className = 'service_type'>
            None
          </span>
        }

        <a href='/' className='biz_service edit'>
          Edit
        </a>
      </div>
    );
  }
}


module.exports = OverviewServices;