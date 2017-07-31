import BlockTile from '../../src/components/BlockTile';

describe('BlockTile', () => {
  let wrapper;
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
      <BlockTile
        block= {block}
      />
    )
  });

  it('should render a p tag with an id of name', () => {
    expect(wrapper.find("p#name")).toBePresent()
    expect(wrapper.find("p#name").text()).toMatch("A1 x4")
  })

  it('should render a p tag with an id of measure', () => {
    expect(wrapper.find("p#measure")).toBePresent()
    expect(wrapper.find("p#measure").text()).toMatch("Measures: 8, 6/8")
  })

  it('should render a p tag with an id of scale', () => {
    expect(wrapper.find("p#scale")).toBePresent()
    expect(wrapper.find("p#scale").text()).toMatch("Key: C Arabic")
  })

  it('should display the block-tile classname', () => {
    expect(wrapper.find(".block-tile-red")).toBePresent()
  })

})
