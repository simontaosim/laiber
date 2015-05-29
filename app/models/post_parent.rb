class PostParent < ModelBase
	include Mongoid::Document
	include Mongoid::Timestamps
	belongs_to :post
	field :parent_post_id, type: String
end
