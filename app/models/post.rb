class Post
	include Mongoid::Document
	include Mongoid::Timestamps
	field :title, type: String
	field :content, type: String
	has_many :post_child, dependent: :destroy
	has_one :post_parent
	belongs_to :user

	@@instance_post_helper = nil

	def self.PostsHelper
		if @@instance_post_helper == nil
			@@instance_post_helper = Helpers::PostsHelper.new
		end
		return @@instance_post_helper
	end

	def self.GetPosts(getPostsParams)

	end

	private
	
end
