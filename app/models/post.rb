class Post
	include Mongoid::Document
	include Mongoid::Timestamps
	field :title, type: String
	field :content, type: String
	has_many :post_child, dependent: :destroy
	has_one :post_parent
	belongs_to :user

end
