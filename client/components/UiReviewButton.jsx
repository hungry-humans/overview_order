// import React, { Component, useState } from 'react';
const React = require('react');
// const useState = React.useState;

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
      showWriteReview: 'active ',
      showOverlay: 'active'
    });
  }

  closeBtnClicked () {
    this.setState({
      showWriteReview: '',
      showOverlay: ''
    });
  }

  clickEvent (type) {
    if (type === 'guideline') {
      this.setState({
        showGuide: 'active'
      });
    }
  }


  render() {

    const textareaPlaceholder = 'If you want to find the world’s best street burrito, look no further. Whenever I’m craving a California burrito, I immediately head to this food truck. For $12, they stuff in fries, guacamole, sour cream, and your choice of meat. The employees like to keep the line moving, which is great especially during lunch. There’s so many things to try outside of burritos though. Better to place your order ahead of time to skip the line.';

    return (
      <>
        <div className="flex_content">
          <button className="overview_a_button overview_write_review text_600 " onClick={e => this.reviewClicked()}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="icon_svg"><path d="M8.94 1l2.373 5.387 5.187.758-3.75 3.67.928 5.077-4.737 -2.907L4.367 16l.885-5.186-3.75-3.67 5.187-.757L8.94 1z"></path></svg>
                Write Review
            </span>
          </button>
        </div>

        {/* Modal for making a review */}

        <div className={ 'modal ' + this.state.showWriteReview }>
          <div className="modal-header yelp">
            <div className="title text_700">
              Write a Review
            </div>
            <button className="close-button" onClick={e => this.closeBtnClicked()}> &times; </button>
          </div>
          <div className="modal-body">

            <div className='flex_box stack'>
              <div className="flex_content review-header">
                <div className='review-title text_600'> {this.props.bizInfo.name} </div>
                <div onClick={e=>this.clickEvent('guideline')}> Read our review guidelines</div>
              </div>

              <div className='flex_box stack review-content'>
                <div className="review-status flex_content">
                  <div id="Review Star Selector" >
                    [Review Star Selector] Select your rating
                  </div>
                  <div className='review-status-autosave'> All changes saved </div>
                </div>
                <textarea className='textarea-simple clean text_400' placeholder={textareaPlaceholder}>

                </textarea>

              </div>


              <div className="flex_content review-header-photo">
                <div className='review-title text_600'> Attach Photos </div>
                <div> optional </div>
              </div>


              <div className='flex_box stack review-content-photo'>
                <div id="photoUploader" className="flex_content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="icon_svg"><path d="M19 20H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2.184A2.99 2.99 0 0 1 10 4h4a2.99 2.99 0 0 1 2.816 2H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3zM12.005 8.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM13 14v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-1z"></path></svg>
                  Upload
                </div>


              </div>
            </div>


          </div>
          <div className="modal-footer">

            <button className="overview_write_review reivew-post-button text_600">
              Post Reivew
            </button>

          </div>
        </div>

        {/*
        <div className={'modal ' + this.state.show }>

        </div> */}


        <div id="overlay" className={this.state.showOverlay} onClick={e => this.closeBtnClicked()}></div>
      </>
    );
  }
}


module.exports = UIReviewButton;
// export default UIReviewButton;



