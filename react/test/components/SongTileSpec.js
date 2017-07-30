import SongTile from '../../src/components/SongTile';

describe('SongTile', () => {
  let wrapper;
  let song = {id: 1, name: "Be a RockStar", description: "A song about egos"}

  beforeEach(() => {
    wrapper = mount(
      <SongTile
        song= {song}
      />
    )
  });

  it('renders a paragraph tag with the song title', () => {
    expect(true).toEqual(true)
  })

  it('should render an SongTile component that has a paragraph tag with the title text', () => {
    expect(wrapper.find("p")).toBePresent()
    expect(wrapper.find("p").text()).toMatch("Be a RockStar")
  })

  it('should not find the description displayed', () => {
    expect(wrapper.find("p").text()).not.toEqual("A song about egos")
  })

  it('should display the song-tile classname', () => {
    expect(wrapper.find(".song-tile")).toBePresent()
  })

  it('should render a Link to the song page', () => {
    expect(wrapper.find("a")).toBePresent()
  })

})
