# == Schema Information
#
# Table name: reviews
#
#  id              :bigint           not null, primary key
#  author_id       :integer          not null
#  game_id         :integer          not null
#  recommended     :boolean
#  body            :text             not null
#  votes           :integer          default(0), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  author_username :string
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
