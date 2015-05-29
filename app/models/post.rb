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

	def self.GetPosts(limit = nil)
		limit = nil ? -1 : limit

		return Post.desc(:created_at).where(:title => nil).limit(limit)
	end

	def self.GetPostsForTop(topPostId, limit = nil)
		limit = nil ? -1 : limit
		topPost = Post.find(topPostId)
		return Post.desc(:created_at).for_js("this.title == null").where(:created_at > topPost[:created_at]).limit(limit)
	end

	def self.GetPostsForBottom(bottomPostId, limit = nil)
		limit = nil ? -1 : limit
		bottomPost = Post.find(bottomPostId)
		return Post.desc(:created_at).for_js("this.title == null").where(:created_at < bottomPost[:created_at]).limit(limit)
	end

	def self.GetPostsFromParentPost(parentPostId, limit = nil)
		result = []
		limit = nil ? -1 : limit
		parentPost = Post.find(parentPostId)
		parentPost.post_children.desc(:created_at).limit(limit).each{
			|x|
			result.push(Post.find(x.child_post_id))
		}
		return result
	end

	def self.GetPostsForTopFromParentPost(topPostId, parentPostId, limit = nil)
		result = []
		parentPost = Post.find(parentPostId)
		topPost = Post.find(topPostId)
		parentPost.post_children.desc(:created_at).where(:created_at > topPost[:created_at]).limit(limit).each{
			|x|
			result.push(Post.find(x.child_post_id))
		}
		return result
	end

	def self.GetPostsForBottomParentPost(bottomPostId, parentPostId, limit = nil)
		result = []
		parentPost = Post.find(parentPostId)
		bottomPost = Post.find(bottomPostId)
		parentPost.post_children.desc(:created_at).where(:created_at < bottomPost[:created_at]).limit(limit).each{
			|x|
			result.push(Post.find(x.child_post_id))
		}
		return result
	end

	def self.NewPost(postTitle, postContent, userId, parentPostId = nil)
		post = Post.new
		post.title = postTitle
		post.content = postContent
		post.user = User.find(userId)
		# post.index = Post.last ? Post.last.index + 1 : 0
		post.save

		if parentPostId
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
