# == Schema Information
#
# Table name: game_ownerships
#
#  id         :bigint           not null, primary key
#  owner_id   :integer
#  game_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GameOwnership < ApplicationRecord

    validates_uniqueness_of :owner_id, :scope => :game_id

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    belongs_to :game,
        foreign_key: :game_id,
        class_name: :Game

end
