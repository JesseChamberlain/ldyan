class CreateBlocks < ActiveRecord::Migration[5.0]
  def change
    create_table :blocks do |t|
      t.string :name, null: false
      t.integer :repetitions, null: false
      t.integer :measures, null: false
      t.integer :time_signature_over
      t.integer :time_signature_under
      t.string :musical_key
      t.belongs_to :song

      t.timestamps
    end
  end
end
