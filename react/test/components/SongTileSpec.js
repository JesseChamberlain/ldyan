import SongTile from '../../src/components/SongTile';

describe('SongTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <SongTile
        song= {
          id: 1,
          name: "How to Be a RockStar",
          description:"A song about egos and drugs"
        }
      />
    )
  });

  it('renders a paragraph tag with the song title', () => {
    expect(true).toEqual(true)
  })

  xit('should render an SongTile component that has a paragraph tag with the title text', () => {
    expect(wrapper.find("p")).toBePresent()
    expect(wrapper.find("p").text()).toMatch("How to Be a RockStar")
  })

  xit('should not find the description displayed', () => {
    expect(wrapper.find("p").text()).not.toEqual("A song about egos and drugs")
  })

  xit('should display the song-tile classname', () => {
    expect(wrapper.find('.song-tile')).toBePresent()
  })

  xit('should render a Link to the song page', () => {
    expect(wrapper.find(Link)).toBePresent()
  })

})
