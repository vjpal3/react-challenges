import LauncherTile from '../../src/components/LauncherTile';

describe('LauncherTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <LauncherTile
        id='1'
        name='My name'
      />
    );
  });

  it('should render the name of the launcher which is a link', () => {
    expect(wrapper.find('Link')).toBePresent();
    expect(wrapper.find('Link').prop('to')).toEqual('/launcher/1');
    expect(wrapper.find('Link').text()).toEqual('My name')
  })
})
