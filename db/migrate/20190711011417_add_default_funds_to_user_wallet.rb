class AddDefaultFundsToUserWallet < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :wallet, :integer, default: 10000
  end
end
