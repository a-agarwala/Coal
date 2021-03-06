# == Schema Information
#
# Table name: games
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  price        :integer          default(0)
#  release_date :string
#  developer    :string
#  publisher    :string
#  side_text    :text
#

class Game < ApplicationRecord

    #validations

    validates :title, presence: true

    #associations
    has_many :game_ownerships,
        foreign_key: :game_id,
        class_name: :GameOwnership
    
    has_many :owners,
        through: :game_ownerships,
        source: :owner
    
    has_many :reviews,
        foreign_key: :game_id,
        class_name: :Review
    
    has_many :reviewers,
        through: :reviews,
        source: :author

    has_many_attached :photos

end
