
const OverviewTitle = require('../client/components/overview_info/Title.jsx');
const OverviewReview = require('../client/components/overview_info/ReviewRating.jsx');
const OverviewServices = require('../client/components/overview_info/TypeofServices.jsx');
const OverviewLastUpdated = require('../client/components/overview_info/UpdateChecker.jsx');

const OverviewUIbuttons = require('../client/components/overview_ui/UI_buttons.jsx');



const sampleBizData = {
  'id': 2,
  'biz_id': '2',
  'name': 'Morar, Schuster and Volkman',
  'address': '15844 Hermiston Ramp',
  'city': 'Bartonmouth',
  'state': 'NC',
  'postal_code': '78313',
  'stars': 2.8,
  'review_count': 56659,
  'is_open': false,
  'attributes': ['', ''],
  'categories': ['auxiliary', 'food'],
  'hours': ['Mon : 5-2', 'Tue : 9-7', 'Wed : 1-5', 'Thr : 8-11', 'Fri : 6-3', 'Sat : 11-7', 'Sun : 12-1'],
  'createdAt': '2020-06-20T01:17:28.646Z',
  'updatedAt': '2020-06-20T01:17:28.646Z'
};



describe('<OverviewTitle /> rendering', () => {

  let wrapper = shallow(<OverviewTitle bizitle={sampleBizData.name} />);

  it('should render one <h1>', () => {
    expect(wrapper.exists('h1')).toBe(true);
  });


});


describe('<OverviewReview /> rendering', () => {

  let wrapper = shallow(<OverviewReview bizRate={sampleBizData.stars} bizReviewCount={sampleBizData.review_count} />);

  it('should render review stars', () => {
    expect(wrapper.exists('.review_stars_img')).toBe(true);
    expect(wrapper.exists('p')).toBe(true);
  });

});



// describe('<OverviewTitle /> rendering', () => {

//   let wrapper = shallow(<OverviewTitle bizitle={sampleBizData.name} />);

//   it('should render one <h1>', () => {
//     expect(wrapper.children('h1')).toBe(true);
//   });


// });


// describe('<OverviewTitle /> rendering', () => {

//   let wrapper = shallow(<OverviewTitle bizitle={sampleBizData.name} />);

//   it('should render one <h1>', () => {
//     expect(wrapper.children('h1')).toBe(true);
//   });
// });