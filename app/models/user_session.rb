class UserSession < ModelBase
	include Mongoid::Document
	include Mongoid::Timestamps
	belongs_to :user
	field :name, type: String
end
