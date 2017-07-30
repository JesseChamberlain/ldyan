class Api::V1::BlocksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    song = Song.find(params[:song_id])
    blocks = song.blocks
    render json: blocks
  end
end
