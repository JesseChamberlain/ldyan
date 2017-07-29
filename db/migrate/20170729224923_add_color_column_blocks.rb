class AddColorColumnBlocks < ActiveRecord::Migration[5.0]
  def change
    add_column :blocks, :color, :string, null: false, default: "green"
  end
end
