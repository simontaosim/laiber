class PostParent < ModelBase
	include Mongoid::Document
	include Mongoid::Timestamps
	belongs_to :post
	field :parent_post_id, type: String

	def self.NewPostParent(postId, parentPostId)
		postParent = PostParent.new
		postParent.post = Post.find(postId)
		postParent.parent_post_id = parentPostId
		postParent.save
	end
end
