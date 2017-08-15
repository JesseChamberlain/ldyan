require 'rails_helper'

RSpec.describe Api::V1::SongsController, type: :controller do
  let!(:first_song) {FactoryGirl.create(:song)}
  let!(:second_song) {FactoryGirl.create(:song)}

  xdescribe "GET#index" do
    it "should return details about a song" do
      get :index
      returned_json = JSON.parse(response.body)
      song_1 = returned_json["songs"][0]
      song_2 = returned_json["songs"][1]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 1
      expect(returned_json["songs"].length).to eq 2

      expect(song_1["id"]).to eq first_song.id
      expect(song_1["name"]).to eq first_song.name
      expect(song_1["description"]).to eq first_song.description

      expect(song_2["id"]).to eq second_song.id
      expect(song_2["name"]).to eq second_song.name
      expect(song_2["description"]).to eq second_song.description
    end
  end

  xdescribe "GET#show" do
    it "should return details about a song" do
      get :show, params: {id: first_song.id}
      returned_json = JSON.parse(response.body)
      song = returned_json["song"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 2

      expect(song["id"]).to eq first_song.id
      expect(song["name"]).to eq first_song.name
      expect(song["description"]).to eq first_song.description
    end
  end
end
