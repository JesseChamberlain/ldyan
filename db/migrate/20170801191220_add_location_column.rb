class AddLocationColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :blocks, :location, :integer
  end
end
