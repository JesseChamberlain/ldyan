class Api::V1::BlocksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    song = Song.find(params[:song_id])
    blocks = song.blocks
    render json: blocks
  end

  def create
    data = JSON.parse(request.body.read)
    block = Block.new(data)
    # binding.pry
    block.save
    render json: { message: "Created Block" }
  end

  def update
    data = JSON.parse(request.body.read)
    new_block = Block.new(data)
    block = Block.find(params[:id])
    block = new_block
    block.name = "Cat"
    # binding.pry
    block.save
    render json: { message: "Updated Block" }
  end

  def destroy
    block = Block.find(params[:id])
    block.delete
    render json: { message: "Deleted Block" }
  end
end
