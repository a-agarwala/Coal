class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :game_id, null: false
      t.boolean :recommended
      t.text :body
      t.integer :votes, 
      t.timestamps
    end
  end
end
