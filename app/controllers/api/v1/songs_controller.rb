class Api::V1::SongsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!, except: [:index, :show, :create, :update, :destroy]

  def index
    render json: Song.all
  end

  def show
    song = Song.find(params[:id])
    blocks = song.blocks
    sorted_blocks = blocks.sort_by{|b| b["location"]}
    render json: {song: song, blocks: sorted_blocks}
  end

  def create
    data = JSON.parse(request.body.read)
    song = Song.new(data)
    song.save
    render json: { message: "Created Song" }
  end

  def update
    data = JSON.parse(request.body.read)
    key_check = data.keys
    if key_check[0] == "blocks"
      blocks = Song.find(params[:id]).blocks
      blocks.each do |block|
        data["blocks"].each_with_index do |d, i|
          if d["id"] == block.id
            new_location = (i + 1)
            unless new_location == block.location
              block.location = new_location
              block.save
            end
          end
        end
      end
      song = Song.find(params[:id])
      sorted_blocks = blocks.sort_by{|b| b["location"]}
      render json: {song: song, blocks: sorted_blocks}
    elsif key_check[0] == "song"
      song = Song.find(params[:id])
      song.name = data["song"]["name"]
      song.description = data["song"]["description"]
      song.save
      render json: { message: "Updated Song" }
    end
  end

  def destroy
    song = Song.find(params[:id])
    blocks = Song.find(params[:id]).blocks
    blocks.each do |block|
      block.delete
    end
    song.delete
    render json: { message: "Deleted Song & Blocks" }
  end
end
