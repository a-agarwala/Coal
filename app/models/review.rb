# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  game_id     :integer          not null
#  recommended :boolean
#  body        :text             not null
#  votes       :integer          default(0), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord

    validates_uniqueness_of :author_id, :scope => :game_id
    validates :author_id, :game_id, :body, presence: true
    #associations

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
    
    belongs_to :game,
        foreign_key: :game_id,
        class_name: :Game

end
