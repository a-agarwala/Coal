class AddNullConstraintToGameOwnership < ActiveRecord::Migration[5.2]
  def change
    change_column :game_ownerships, :owner_id, :integer, null: false
    change_column :game_ownerships, :game_id, :integer, null: false
  end
end
