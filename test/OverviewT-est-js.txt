
const OverviewTitle = require('../client/components/overview_info/Title.jsx');
const OverviewReview = require('../client/components/overview_info/ReviewRating.jsx');
const OverviewServices = require('../client/components/overview_info/TypeofServices.jsx');
const OverviewLastUpdated = require('../client/components/overview_info/UpdateChecker.jsx');

const OverviewUIbuttons = require('../client/components/overview_ui/UI_buttons.jsx');
const UIReviewButton = require('../client/components/overview_ui/ui_reivewButton.jsx');
const UIShareButton = require('../client/components/overview_ui/ui_shareButton.jsx');


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
    expect(wrapper.exists('.review_counter')).toBe(true);
    expect(wrapper.exists('.review_detail_button')).toBe(true);
    //p.text.length > 8?
  });

});




//OverviewServices
describe('<OverviewServices /> rendering', () => {

  let wrapper = shallow(<OverviewServices bizServices={sampleBizData.categories} />);

  it('should render types of services', () => {
    expect(wrapper.exists('.service_types')).toBe(true);
    expect(wrapper.exists('a')).toBe(true);
    //p.text.length > 8?
  });
});


//OverviewLastUpdated
describe('<OverviewLastUpdated /> rendering', () => {

  let wrapper = shallow(<OverviewLastUpdated updatedAt={sampleBizData.updatedAt} />);

  it('should render when the biz was updated', () => {
    expect(wrapper.exists('svg')).toBe(true);
    expect(wrapper.exists('.p_flat')).toBe(true);
  });
});




// UI


describe('OverviewUIbuttons rendering', () => {
  let wrapper = shallow( <OverviewUIbuttons bizInfo={sampleBizData}/>);

  it('should render UI buttons', () => {
    expect(wrapper.exists('.overview_a_button')).toBe(true);
    expect(wrapper.exists('button')).toBe(true);
    expect(wrapper.exists('svg')).toBe(true);
  });
});





describe('UIReviewButton rendering', () => {
  let wrapper = shallow( <UIReviewButton bizInfo={sampleBizData}/>);

  it('should render UI buttons', () => {
    expect(wrapper.exists('.modal')).toBe(true);
    expect(wrapper.exists('.modal-body')).toBe(true);
    expect(wrapper.exists('#overlay')).toBe(true);
    expect(wrapper.exists('.title')).toBe(true);
    expect(wrapper.exists('.close-button')).toBe(true);
    expect(wrapper.exists('button')).toBe(true);
    expect(wrapper.exists('textarea')).toBe(true);
    expect(wrapper.exists('svg')).toBe(true);
  });
});



