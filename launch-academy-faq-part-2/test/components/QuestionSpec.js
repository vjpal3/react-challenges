import Question from '../../src/components/Question'

describe('Question', () => {
  let wrapper, onClick;

  beforeEach(() => {
    onClick = jasmine.createSpy('onClick spy').and.callThrough();

    wrapper = mount(
      <Question
        question={'What is your camp like?'}
        answer={'It\'s really awesome!'}
        handleClick={onClick}
        selected={true}
      />
    )
  })

  it('should render a Question component that has an h5 with question text', () => {
    expect(wrapper.find('h5')).toBePresent()
    expect(wrapper.find('h5').text()).toEqual('What is your camp like?')
  })

  it('should invoke onClick when clicked', () => {
    wrapper.find('i').simulate('click');
    // console.log(wrapper.debug());
    expect(onClick).toHaveBeenCalled();
  })

  it('should render a Question component along with answer when selected', () => {
      expect(wrapper.find('p').text()).toEqual('It\'s really awesome!');
  })

  it('should render a Question component with no answer when deselected', () => {
    wrapper.setProps({selected: false});
    expect(wrapper.find('p').text()).toEqual('');
  })

})
