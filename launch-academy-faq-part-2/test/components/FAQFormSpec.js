import FAQForm from '../../src/components/FAQForm';

describe('FAQForm', () => {
  let wrapper;
  let formSubmit = jasmine.createSpy('formSubmit spy');
  let inputChange = jasmine.createSpy('inputChange spy');
  let str='';

  beforeEach(() => {
    wrapper = mount(
      <FAQForm
        question={str}
        handleFormSubmit={formSubmit}
        handleInputChange={inputChange}
      />
    );
  })

  it('renders a form with a input text', () => {
    expect(wrapper.find('input[type="text"]')).toBePresent();
    expect(wrapper.find('input[name="question"]')).toBePresent();
  });

  it('renders a form with a textarea', () => {
    expect(wrapper.find('textarea')).toBePresent();
    expect(wrapper.find('textarea[name="answer"]')).toBePresent();
  });

  it('renders a form with a submit button', () => {
    expect(wrapper.find('input[type="submit"]')).toBePresent();
    let submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('value')).toEqual('Submit FAQ');
  });

  it('should invoke handleformSubmit function when submit button is clicked', () => {
    wrapper.find('form').simulate('submit');
    expect(formSubmit).toHaveBeenCalled();
  })

  it('should invoke handleInputChange function when form inputs are changed', () => {
    wrapper.find('input[name="question"]').simulate('change', {target: {name: 'question', value: 'How about this new question?'}});
    expect(inputChange).toHaveBeenCalled();
    wrapper.find('textarea[name="answer"]').simulate('change', {target: {name: 'answer', value: 'This is new answer!'}});
    expect(inputChange).toHaveBeenCalled();
  })
})
