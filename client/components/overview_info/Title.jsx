const React = require('react');


class OverviewTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id='bizTitle' >
        <h1 className='title_text'> {this.props.bizTitle} </h1>
        <span>
          <span className='icon_claimed'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="icon_svg"><path d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm3.96 6.28l-4.808 4.807-3.112-3.11a.8.8 0 1 1 1.13-1.132l1.982 1.98 3.677-3.677a.8.8 0 1 1 1.13 1.13z"></path></svg>
          </span>
          <span className='info_claimed'>Claimed</span>
        </span>
      </div>
    );
  }
}


module.exports = OverviewTitle;