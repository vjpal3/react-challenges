import FAQForm from '../../src/components/FAQForm';

describe('FAQForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <FAQForm />
    );
  })

  it('renders a form with a input text', () => {
    expect(wrapper.find('input[type="text"]')).toBePresent();
    expect(wrapper.find('input[name="question"]')).toBePresent();
    // expect(wrapper.find('input').prop('value')).toEqual('question');
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
})
