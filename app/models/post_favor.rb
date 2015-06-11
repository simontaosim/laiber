class PostFavor < ModelBase
	include Mongoid::Document
	include Mongoid::Timestamps
	belongs_to :user
	field :favor_post_id, type: String

	def self.NewPostFavor(userId, postId)
		postFavor = PostFavor.new
		postFavor.user = User.find(userId)
		postFavor.favor_post_id = postId
		postFavor.save
	end
end