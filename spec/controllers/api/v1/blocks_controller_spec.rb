require 'rails_helper'

RSpec.describe Api::V1::BlocksController, type: :controller do
  let!(:first_song) {FactoryGirl.create(:song)}
  let!(:first_block) {FactoryGirl.create(:block, song_id: first_song.id)}
  let!(:second_block) {FactoryGirl.create(:block, song_id: first_song.id, color: "yellow")}

  describe "GET#index" do
    it "should return details about a song blocks for first_song" do
      get :index, params: {song_id: first_block.song_id}
      returned_json = JSON.parse(response.body)
      block_1 = returned_json["blocks"][0]
      block_2 = returned_json["blocks"][1]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 1
      expect(returned_json["blocks"].length).to eq 2

      expect(block_1["id"]).to eq first_block.id
      expect(block_1["name"]).to eq first_block.name
      expect(block_1["repetitions"]).to eq first_block.repetitions
      expect(block_1["measures"]).to eq first_block.measures
      expect(block_1["time_signature_over"]).to eq first_block.time_signature_over
      expect(block_1["time_signature_under"]).to eq first_block.time_signature_under
      expect(block_1["musical_key"]).to eq first_block.musical_key
      expect(block_1["song_id"]).to eq first_block.song_id
      expect(block_1["color"]).to eq first_block.color

      expect(block_2["id"]).to eq second_block.id
      expect(block_2["name"]).to eq second_block.name
      expect(block_2["repetitions"]).to eq second_block.repetitions
      expect(block_2["measures"]).to eq second_block.measures
      expect(block_2["time_signature_over"]).to eq second_block.time_signature_over
      expect(block_2["time_signature_under"]).to eq second_block.time_signature_under
      expect(block_2["musical_key"]).to eq second_block.musical_key
      expect(block_2["song_id"]).to eq second_block.song_id
      expect(block_2["color"]).to eq second_block.color
    end
  end
end
