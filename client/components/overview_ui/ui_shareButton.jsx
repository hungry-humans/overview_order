
// import React, { Component, useState } from 'react';
const React = require('react');
// const useState = React.useState;

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
      showShare: ' active ',
      showOverlay: ' active '
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
        <div className="flex_content">
          <button className="overview_a_button"  onClick={e=>this.shareClicked()}>
            <span className="overview_ui_span text_600">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="icon_svg"><path d="M17.714 6.43L13 10.356v-3.03c-1 0-5.097 1.47-6.286 3.62.274-3.08 4.286-5.5 6.286-5.5V2.5l4.714 3.93zM3 4v10h11v-2.5l1-1V15H2V3h8.5l-1 1H3z"></path></svg>
              Share
            </span>
          </button>
        </div>



        {/* Modal for share feature */}
        <div className={ 'modal ' + this.state.showShare }>
          <div className="modal-header">
            <div className="title text_700">
              Share business
            </div>
            <button className="close-button" onClick={e => this.closeBtnClicked()}> &times; </button>
          </div>
          <div className="modal-body">
            <div className='flex_box stack'>
              <div className='flex_content full'>
                <button className='flex_box share-button facebook-style text_600'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon_svg"><path d="M22 12.06c0-5.522-4.477-10-10-10s-10 4.48-10 10c0 4.992 3.657 9.13 8.437 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.507 1.493-3.89 3.778-3.89 1.093 0 2.238.194 2.238.194v2.46h-1.26c-1.243 0-1.63.772-1.63 1.564v1.875h2.773l-.443 2.89h-2.33v6.99C18.343 21.19 22 17.05 22 12.06z"></path></svg>
                  Share on Facebook
                </button>
                <button className='flex_box share-button twitter-style text_600'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="icon_svg"><path d="M21 6.417A7.364 7.364 0 0 1 18.88 7a3.708 3.708 0 0 0 1.623-2.044 7.41 7.41 0 0 1-2.346.896 3.693 3.693 0 0 0-6.292 3.368 10.483 10.483 0 0 1-7.612-3.858c-.318.545-.5 1.18-.5 1.856a3.69 3.69 0 0 0 1.643 3.074 3.674 3.674 0 0 1-1.673-.462v.047c0 1.79 1.273 3.28 2.962 3.62a3.714 3.714 0 0 1-1.667.064 3.697 3.697 0 0 0 3.45 2.57 7.41 7.41 0 0 1-4.587 1.58 7.8 7.8 0 0 1-.88-.05 10.45 10.45 0 0 0 5.66 1.66c6.8 0 10.51-5.627 10.51-10.507 0-.16 0-.32-.01-.48A7.496 7.496 0 0 0 21 6.418z"></path></svg>
                  Share on Twitter
                </button>
              </div>

              <div className='flex_box full extra-margin border'>
                <div className='flex_content '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="icon_svg"><path d="M5.82 1a1 1 0 0 1 0 2H3v10h10v-2.88a1 1 0 0 1 2 0V14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h3.82zm8.68 0a.5.5 0 0 1 .5.47v4a.5.5 0 0 1-.31.53.63.63 0 0 1-.19 0 .5.5 0 0 1-.35-.12l-1.27-1.27L9.49 8a1.018 1.018 0 0 1-1.41-1.47l3.36-3.38-1.3-1.3a.51.51 0 0 1-.11-.54.5.5 0 0 1 .47-.31z"></path></svg>
                </div>
                <div className='flex_content full'>
                  <input className='share-deco clean text_400 ' placeholder ='www.hungryhumans.com/biz/1'/>
                </div>

              </div>


              <div className='flex_content full'>
                <fieldset className='share-deco'>
                  <legend className='share-deco'>
                    <span className='share-deco text_400'> OR </span>
                  </legend>
                </fieldset>

              </div>
              <div className='flex_content full'>
                <span className='text_600 '> To </span> <div>Yelper names or email addresses</div>
              </div>
              <div className='flex_content full extra-margin'>
                <input className='share-deco text_400 ' />
              </div>

              <div className='flex_content full'>
                <span className='text_600 '> Add a note </span> <div>Optional</div>
              </div>
              <div className='flex_content full extra-margin'>
                <textarea className='textarea-simple share-deco text_400' />
              </div>

              <button className="overview_write_review reivew-post-button text_600">
                Share
              </button>
            </div>

          </div>
        </div>

        {/* Overlay */}
        <div id="overlay" className={this.state.showOverlay}></div>

      </>
    );
  }
}



module.exports = UIShareButton;


