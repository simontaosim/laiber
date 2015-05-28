class PostParent
	include Mongoid::Document
	include Mongoid::Timestamps
	belongs_to :post
	has_one :post
end
