class PostChild < ModelBase
	include Mongoid::Document
	include Mongoid::Timestamps
	belongs_to :post
	field :child_post_id, type: String
end
