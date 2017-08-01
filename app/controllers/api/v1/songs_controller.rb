class Api::V1::SongsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Song.all
  end

  def show
    song = Song.find(params[:id])
    blocks = song.blocks
    sorted_blocks = blocks.sort_by{|b| b["location"]}
    render json: {song: song, blocks: sorted_blocks}
  end

  def update
    data = JSON.parse(request.body.read)
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
  end
end
