# == Schema Information
#
# Table name: game_ownerships
#
#  id         :bigint           not null, primary key
#  owner_id   :integer          not null
#  game_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class GameOwnershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
