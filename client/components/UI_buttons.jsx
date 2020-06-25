const React = require('react');

class OverviewUIbuttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="overview_ui" class='flex_box'>
        <div class="flex_content">
          <a class="overview_a_button overview_write_review ">
            <div class="overview_ui_button">
              <span class="overview_ui_span text_600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="icon_svg"><path d="M8.94 1l2.373 5.387 5.187.758-3.75 3.67.928 5.077-4.737-2.907L4.367 16l.885-5.186-3.75-3.67 5.187-.757L8.94 1z"></path></svg>
                Write Review
              </span>
            </div>
          </a>
        </div>

        <div class="flex_content">
          <a class="overview_a_button">
            <div class="overview_ui_button">
              <span class="overview_ui_span text_600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="icon_svg"><path d="M15 15H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2zM9 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>
                Add Photo
              </span>
            </div>
          </a>
        </div>

        <div class="flex_content">
          <div class="overview_a_button">
            <span class="overview_ui_span text_600">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="icon_svg"><path d="M17.714 6.43L13 10.356v-3.03c-1 0-5.097 1.47-6.286 3.62.274-3.08 4.286-5.5 6.286-5.5V2.5l4.714 3.93zM3 4v10h11v-2.5l1-1V15H2V3h8.5l-1 1H3z"></path></svg>
              Share
            </span>

          </div>
        </div>

        <div class="flex_content">
          <div class="overview_a_button">
            <span class="overview_ui_span">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="icon_svg"><path d="M12 2H6a2 2 0 0 0-2 2v12l5-4 5 4V4a2 2 0 0 0-2-2zm1 11.92l-3.375-2.7-.625-.5-.625.5L5 13.92V4c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v9.92z"></path></svg>
              Save
            </span>
          </div>
        </div>
      </div>
    );
  }
}


module.exports = OverviewUIbuttons;