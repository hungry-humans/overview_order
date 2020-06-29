const React = require('react');
const UIReviewButton = require('./UiReviewButton.jsx');
// import UIReviewButton from './UiReviewButton.jsx';//client\components\overview_ui\UiReviewButton.jsx
import UIShareButton from './UiShareButton.jsx';

const OverviewUIbuttons = (props) => {
  return (
    <div id="overview_ui" className='flex_box'>
      <UIReviewButton bizInfo={props.bizInfo}/>

      <div className="flex_content">
        <button className="overview_a_button">
          <a className="overview_ui_button">
            <span className="overview_ui_span text_600">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="icon_svg"><path d="M15 15H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2zM9 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>
              Add Photo
            </span>
          </a>
        </button>
      </div>


      <UIShareButton />

      <div className="flex_content">
        <button className="overview_a_button">
          <span className="overview_ui_span">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="icon_svg"><path d="M12 2H6a2 2 0 0 0-2 2v12l5-4 5 4V4a2 2 0 0 0-2-2zm1 11.92l-3.375-2.7-.625-.5-.625.5L5 13.92V4c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v9.92z"></path></svg>
            Save
          </span>
        </button>
      </div>
    </div>
  );
};


export default OverviewUIbuttons;