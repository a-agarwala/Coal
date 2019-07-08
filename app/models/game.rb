# == Schema Information
#
# Table name: games
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Game < ApplicationRecord

    has_many :game_ownerships,
        foreign_key: :game_id,
        class_name: :GameOwnership
    
    has_many :owners,
        through: :game_ownerships,
        source: :owner

end
