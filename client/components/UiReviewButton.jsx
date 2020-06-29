import React from 'react';
import styles from '../styles/UIReviewButton.css';

class UIReviewButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWriteReview: '',
      showOverlay: ''
    };
  }

  reviewClicked () {
    this.setState({
      showWriteReview: styles.modal_active,
      showOverlay: 'active'
    });
  }

  closeBtnClicked () {
    this.setState({
      showWriteReview: '',
      showOverlay: ''
    });
  }

  svgReview () {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className={styles.icon_svg}><path d="M8.94 1l2.373 5.387 5.187.758-3.75 3.67.928 5.077-4.737 -2.907L4.367 16l.885-5.186-3.75-3.67 5.187-.757L8.94 1z"></path></svg>);
  }

  render() {

    const textareaPlaceholder = 'If you want to find the world’s best street burrito, look no further. Whenever I’m craving a California burrito, I immediately head to this food truck. For $12, they stuff in fries, guacamole, sour cream, and your choice of meat. The employees like to keep the line moving, which is great especially during lunch. There’s so many things to try outside of burritos though. Better to place your order ahead of time to skip the line.';

    return (
      <>
        <div className={styles.flex_content}>
          <button className={`${styles.overview_review_button} ${styles.text_600}`} onClick={e => this.reviewClicked()}>
            <span>
              {this.svgReview()}
              Write Review
            </span>
          </button>
        </div>

        {/* Modal for making a review */}

        <div className={`${styles.modal} ${this.state.showWriteReview}`}>
          <div className={styles.modal_header_yelp}>
            <div className={`${styles.title} ${styles.text_700}`}>
              Write a Review
            </div>
            <button className={styles.close_button} onClick={e => this.closeBtnClicked()}> &times; </button>
          </div>
          <div className={styles.modal_body}>

            <div className={styles.flex_stack}>
              <div className={styles.review_header}>
                <div className={`${styles.title} ${styles.text_600}`}> {this.props.bizInfo.name} </div>
                <div> Read our review guidelines</div>
              </div>

              <div className={styles.review_content}>
                <div className={styles.review_status}>
                  <div id="Review Star Selector" >
                    [Review Star Selector] Select your rating
                  </div>
                  <div className={styles.review_status_autosave}> All changes saved </div>
                </div>
                <textarea className={styles.review_text} placeholder={textareaPlaceholder}>

                </textarea>

              </div>


              <div className={styles.review_header_photo}>
                <div className={`${styles.title} ${styles.text_600}`}> Attach Photos </div>
                <div> optional </div>
              </div>


              <div className={styles.review_content_photo}>
                <div id="photoUploader" className={styles.flex_content}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={styles.icon_svg}><path d="M19 20H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2.184A2.99 2.99 0 0 1 10 4h4a2.99 2.99 0 0 1 2.816 2H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3zM12.005 8.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM13 14v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-1z"></path></svg>
                </div>
                <span>Upload</span>
              </div>
            </div>


          </div>
          <div id="modal_footer">

            <button className={styles.review_post_button}>
              Post Reivew
            </button>

          </div>
        </div>

        <div id="overlay" className={this.state.showOverlay} onClick={e => this.closeBtnClicked()}></div>
      </>
    );
  }
}


export default UIReviewButton;



//Extra - planning to add another modal in Guidelines
// clickEvent (type) {
//   if (type === 'guideline') {
//     this.setState({
//       showGuide: 'active'
//     });
//   }
// }