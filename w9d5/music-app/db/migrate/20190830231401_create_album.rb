class CreateAlbum < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.boolean :live, defualt: :false
      t.integer :band_id, null: false
      t.timestamp
    end
    add_index(:albums, :band_id)
  end
end
