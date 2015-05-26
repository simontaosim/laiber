class PostParent
	include Mongoid::Document
	include Mongoid::Timestamps
	belongs_to :post
	has_many :posts, dependent: :destroy


end
