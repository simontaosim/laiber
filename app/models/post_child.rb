class PostChild < ModelBase
	include Mongoid::Document
	include Mongoid::Timestamps
	belongs_to :post
	field :child_post_id, type: String

	def self.NewPostChild(postId, childPostId)
		postChild = PostChild.new
		postChild.post = Post.find(postId)
		postChild.child_post_id = childPostId
		postChild.save
	end
end
