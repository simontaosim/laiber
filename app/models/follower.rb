class Follower < ModelBase
  include Mongoid::Document
  include Mongoid::Timestamps
  belongs_to :user
  field :follower_id, type: String
end
