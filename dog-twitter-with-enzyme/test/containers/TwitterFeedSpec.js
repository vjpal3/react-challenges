import TwitterFeed from '../../src/containers/TwitterFeed';
import Tweet from '../../src/components/Tweet';

describe('TwitterFeed', () => {
  let wrapper;
  let data = [{
    id: 1,
    text: "This doesn't look like Kansas",
    user: {
       name: 'Todo',
       profile_image_url: 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg'
    }
  }]

  beforeEach(() => {
    // spyOn(TwitterFeed.prototype, 'handleSelectedTweet').and.callThrough();
    wrapper = mount(
      <TwitterFeed
        data={data}
      />
    )
  });

  //YOUR TEST CODE HERE
  it('should have specified initial state', () => {
    expect(wrapper.state()).toEqual({selectedTweetId: null});
  })

  it('should render a Tweet component', () => {
    expect(wrapper.find(Tweet)).toBePresent();
    // expect(wrapper.find(Tweet).length).toEqual(1);
  })

  it('should render the Tweet component with specific props', () => {
    // console.log( wrapper.debug() )
   expect(wrapper.find(Tweet)).toHaveProp('name', 'Todo');
   expect(wrapper.find(Tweet)).toHaveProp('id', 1);
   expect(wrapper.find(Tweet)).toHaveProp('text', "This doesn't look like Kansas");
   expect(wrapper.find(Tweet)).toHaveProp('userPhoto', 'http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg');
   expect(wrapper.find(Tweet)).toHaveProp('className', '');
   // expect(wrapper.find(Tweet)).toHaveProp('handleClick', 'jasmine.any(Function)');
    // expect(wrapper.find(Tweet).props()).toEqual({
    //   id: 1,
    //   text: "This doesn't look like Kansas",
    //   name: "Todo",
    //   userPhoto: "http://images2.fanpop.com/image/quiz/400000/400752_1271413686448_431_300.jpg",
    //   handleClick: jasmine.any(Function),
    //   className: ""
    // })
  })

  it('should render the Tweet component with specific props when selected', () => {
    wrapper.setState({selectedTweetId: 1})
    expect(wrapper.find(Tweet)).toHaveProp('className', 'selected');
  });
})
