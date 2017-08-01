import BlockTile from '../../src/components/BlockTile';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

describe('BlockTile', () => {
  let wrapper
  let index = 1
  let block =
  {
    id: 1,
    name: "A1",
    repetitions: 4,
    measures: 8,
    time_signature_over: 6,
    time_signature_under: 8,
    musical_key: "C Arabic",
    song_id: 4,
    color: "red"
  }

  beforeEach(() => {
    wrapper = mount(
      <BlockTile index={index} block= {block}/>
    )
  });

  it('should render a p tag with an id of name', () => {
    expect(wrapper.find("p#block-name")).toBePresent()
    expect(wrapper.find("p#block-name").text()).toMatch("A1 x4")
  })

  it('should render a p tag with an id of measure', () => {
    expect(wrapper.find("p#block-measure")).toBePresent()
    expect(wrapper.find("p#block-measure").text()).toMatch("Measures: 8, 6/8")
  })

  it('should render a p tag with an id of scale', () => {
    expect(wrapper.find("p#block-scale")).toBePresent()
    expect(wrapper.find("p#block-scale").text()).toMatch("Key: C Arabic")
  })

  it('should display the block-tile classname', () => {
    expect(wrapper.find(".block-tile-red")).toBePresent()
  })

})
