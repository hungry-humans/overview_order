import React from 'react';
import styles from '../styles/UIShareButton.css';


class UIShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showShare: '',
      showOverlay: ''
    };
  }

  componentDidMount () {
    // this.shareClicked();  // Testing Pupose code. Use it if you want to check.
  }


  shareClicked () {
    this.setState({
      showShare: styles.modal_active,
      showOverlay: styles.overlay_active
    });
  }

  closeBtnClicked () {
    this.setState({
      showShare: '',
      showOverlay: ''
    });
  }


  render() {
    return (
      <>
        <div className={styles.flex_content}>
          <button className={styles.overview_a_button} onClick={e=>this.shareClicked()}>
            <span className={`${styles.overview_ui_span} ${styles.text_600}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className={styles.icon_svg}><path d="M17.714 6.43L13 10.356v-3.03c-1 0-5.097 1.47-6.286 3.62.274-3.08 4.286-5.5 6.286-5.5V2.5l4.714 3.93zM3 4v10h11v-2.5l1-1V15H2V3h8.5l-1 1H3z"></path></svg>
              Share
            </span>
          </button>
        </div>



        {/* Modal for share feature */}
        <div className={`${styles.modal} ${this.state.showShare}`}>
          <div className={styles.modal_header}>
            <div className={`${styles.title} ${styles.text_700}`}>
              Share business
            </div>
            <button className={styles.close_button} onClick={e => this.closeBtnClicked()}> &times; </button>
          </div>
          <div className={styles.modal_body}>
            <div className={styles.flex_stack}>
              <div className={styles.flex_content_full}>
                <button className={styles.share_button_facebook_style}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={styles.icon_svg}><path d="M22 12.06c0-5.522-4.477-10-10-10s-10 4.48-10 10c0 4.992 3.657 9.13 8.437 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.507 1.493-3.89 3.778-3.89 1.093 0 2.238.194 2.238.194v2.46h-1.26c-1.243 0-1.63.772-1.63 1.564v1.875h2.773l-.443 2.89h-2.33v6.99C18.343 21.19 22 17.05 22 12.06z"></path></svg>
                  Share on Facebook
                </button>
                <button className={styles.share_button_twitter_style}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={styles.icon_svg}><path d="M21 6.417A7.364 7.364 0 0 1 18.88 7a3.708 3.708 0 0 0 1.623-2.044 7.41 7.41 0 0 1-2.346.896 3.693 3.693 0 0 0-6.292 3.368 10.483 10.483 0 0 1-7.612-3.858c-.318.545-.5 1.18-.5 1.856a3.69 3.69 0 0 0 1.643 3.074 3.674 3.674 0 0 1-1.673-.462v.047c0 1.79 1.273 3.28 2.962 3.62a3.714 3.714 0 0 1-1.667.064 3.697 3.697 0 0 0 3.45 2.57 7.41 7.41 0 0 1-4.587 1.58 7.8 7.8 0 0 1-.88-.05 10.45 10.45 0 0 0 5.66 1.66c6.8 0 10.51-5.627 10.51-10.507 0-.16 0-.32-.01-.48A7.496 7.496 0 0 0 21 6.418z"></path></svg>
                  Share on Twitter
                </button>
              </div>

              <div className={styles.share_link_box}>
                <div className={styles.flex_content}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={styles.icon_svg}><path d="M5.82 1a1 1 0 0 1 0 2H3v10h10v-2.88a1 1 0 0 1 2 0V14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h3.82zm8.68 0a.5.5 0 0 1 .5.47v4a.5.5 0 0 1-.31.53.63.63 0 0 1-.19 0 .5.5 0 0 1-.35-.12l-1.27-1.27L9.49 8a1.018 1.018 0 0 1-1.41-1.47l3.36-3.38-1.3-1.3a.51.51 0 0 1-.11-.54.5.5 0 0 1 .47-.31z"></path></svg>
                </div>
                <div className={styles.flex_content_full}>
                  <input className={styles.textInput_oneline_clean} placeholder ='www.hungryhumans.com/biz/1'/>
                </div>

              </div>


              <div className={styles.flex_content_full}>
                <fieldset className={styles.fieldset_deco}>
                  <legend className={styles.legend_deco}>
                    <span className={styles.span_deco}> OR </span>
                  </legend>
                </fieldset>

              </div>
              <div className={styles.flex_content_full}>
                <span className={styles.text_600}> To </span> <div>Yelper names or email addresses</div>
              </div>
              <div className={styles.share_input_field}>
                <input className={styles.textInput_oneline} />
              </div>

              <div className={styles.flex_content_full}>
                <span className={styles.text_600}> Add a note </span> <div>Optional</div>
              </div>
              <div className={styles.share_input_field}>
                <textarea className={styles.note_field} />
              </div>

              <button className={styles.share_post_button}>
                Share
              </button>
            </div>

          </div>
        </div>

        {/* Overlay */}
        <div id="overlay" className={`${styles.overlay} ${this.state.showOverlay}`} onClick={e => this.closeBtnClicked()}></div>

      </>
    );
  }
}


export default UIShareButton;

