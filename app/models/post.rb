class Post < ModelBase
	include Mongoid::Document
	include Mongoid::Timestamps
	field :title, type: String
	field :content, type: String
	# field :index, type: Integer
	has_many :post_children, dependent: :destroy
	has_one :post_parent
	belongs_to :user
	has_and_belongs_to_many :tags
	has_and_belongs_to_many :image_items

	@@instance_post_helper = nil

	def self.PostsHelper
		if @@instance_post_helper == nil
			@@instance_post_helper = Helpers::PostsHelper.new
		end
		return @@instance_post_helper
	end

	def self.GetPosts(limit, offset)
		return Post.desc(:created_at).limit(limit).offset(offset)
	end

	def self.NewPost(postTitle, postContent, userId, parentPostId = nil)
		post = Post.new
		post.title = postTitle
		post.postContent = postContent
		post.user = User.find(userId)
		# post.index = Post.last ? Post.last.index + 1 : 0
		post.save

		if postParentId
			parentPost = Post.find(parentPostId)

			postParent = PostParent.new
			postParent.post = post
			postParent.parent_post_id = parentPostId
			postParent.save

			postChild = PostChild.new
			postChild.post = parentPost
			postChild.child_post_id = post.getId
			postChild.save
		end

		return post
	end

	def getPost
		return {"id": getId, "title": self.title, "content": self.content, "created_at": self.created_at}
	end

	def getUser
		return {"id": getId, "name": self.user.name}
	end
	
	def getTags
		res = []
		self.tags.each_with_index{
			|x, index|
			res[index] = {"id": getId, "name": x.name}
		}
		return res
	end

	def getPostAndUser
		return {"post": getPost, "user": getUser}
	end

	def getPostAndUserAndTags
		return {"post": getPost, "user": getUser, "tags": getTags}
	end

	
end
