class AddTempoColumnBlocks < ActiveRecord::Migration[5.1]
  def change
    add_column :blocks, :tempo, :integer
  end
end
