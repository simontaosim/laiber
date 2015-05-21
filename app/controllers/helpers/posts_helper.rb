class Helpers::PostsHelper
	@@instance = nil
	def self.Instance
		if @@instance == nil
			@@instance = Helpers::PostsHelper.new
		end
		return @@instance
	end

	def initialize
		init
	end

	def init
		@posts = Post.order(created_at: :desc)
	end

	def get_posts
		return @posts
	end

end