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

require 'test_helper'

class GameOwnershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
