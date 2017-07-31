import SongsIndexContainer from '../../src/containers/SongsIndexContainer';

describe('SongsIndexContainer', ()=> {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <SongsIndexContainer/>
    )
  });

  it('should render a heading', () => {
    expect(wrapper.find("h1")).toBePresent()
    expect(wrapper.find("h1").text()).toMatch("Songs")
  })

})
