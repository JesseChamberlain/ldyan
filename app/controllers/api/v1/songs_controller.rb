class Api::V1::SongsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Song.all
  end

  def show
    song = Song.find(params[:id])
    blocks = song.blocks
    render json: {song: song, blocks: blocks}
  end

  def update
    data = JSON.parse(request.body.read)
    blocks = Song.find(params[:id]).blocks
    # Logic to post to Database
    blocks.each do |block|
      data["blocks"].each do |d|
        if d["id"] == block["id"]
          # unless d.location == block.location
          #   block.location = d.location
          #   # block.save
          # end
        end
      end
    end
  end
end
