import Tweet from '../../src/components/Tweet';

describe('Tweet', () => {
  let wrapper, onClick;

  beforeEach(() => {
    onClick = jasmine.createSpy('onClick spy');

    wrapper = mount(
      <Tweet
        text='This is funny'
        name='serious'
        userPhoto='http://www.fakeUrl.com/user-photo'
        handleClick={onClick}
      />
    )
  })

  it('renders an image tag', () => {
    expect(wrapper.find('img')).toBePresent();
  })

  it('renders an image tag with specific attributes', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: 'http://www.fakeUrl.com/user-photo'
    })
  })

  it('renders a span tag', () => {
    expect(wrapper.find('span')).toBePresent();
  })

  it('renders a <p> tag', () => {
    expect(wrapper.find('p')).toBePresent();
  });

  it('should invoke onClick when clicked', () => {
    wrapper.simulate('click')
    expect(onClick).toHaveBeenCalled();
  });

})
