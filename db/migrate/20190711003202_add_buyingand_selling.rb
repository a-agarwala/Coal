class AddBuyingandSelling < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :wallet, :integer
    add_column :games, :price, :integer
  end
end
