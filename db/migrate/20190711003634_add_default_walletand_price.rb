class AddDefaultWalletandPrice < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :wallet, :integer, default: 0
    change_column :games, :price, :integer, default: 0
  end
end
