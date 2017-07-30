import SongsIndexContainer from '../../src/containers/SongsIndexContainer';
import SongTile from '../../src/components/SongTile';

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

  it('should render a SongTile component', () => {
    wrapper.setState({
      songs: [{id: 1, name: "Be a RockStar", description: "A song about egos"}]
    })

    expect(wrapper.find(SongTile)).toBePresent()
  })

})
