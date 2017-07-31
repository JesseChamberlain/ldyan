import SongTile from '../../src/components/SongTile';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

describe('SongTile', () => {
  let wrapper;
  let song = {id: 1, name: "Be a RockStar", description: "A song about egos"}

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <SongTile song= {song}/>
      </BrowserRouter>
    )
  });

  it('should render an SongTile component that has a paragraph tag with the title text', () => {
    expect(wrapper.find("span")).toBePresent()
    expect(wrapper.find("span").text()).toMatch("Be a RockStar")
  })

  it('should not find the description displayed', () => {
    expect(wrapper.find("span").text()).not.toEqual("A song about egos")
  })

  it('should display the song-tile classname', () => {
    expect(wrapper.find(".song-tile")).toBePresent()
  })

  it('should render a Link to the song page', () => {
    expect(wrapper.find(Link)).toBePresent()
  })

})
