class PostChild
	include Mongoid::Document
	include Mongoid::Timestamps
	belongs_to :post, dependent: :destroy
	field :child_post_id, type: String
end
