class AddColumnsToGameModel < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :release_date, :string
    add_column :games, :developer, :string
    add_column :games, :publisher, :string
    add_column :games, :side_text, :text
  end
end
