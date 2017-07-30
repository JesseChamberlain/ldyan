class Api::V1::SongsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Song.all
  end

  def show
    song = Song.find(params[:id])
    render json: {song: song}
  end
end
