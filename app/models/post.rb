class Post < ModelBase
	include Mongoid::Document
	include Mongoid::Timestamps
	field :title, type: String
	field :content, type: String
	field :num_children, type: Integer, default: 0
	field :has_parent, type: Boolean, default: false
	# field :index, type: Integer
	has_many :post_children
	has_one :post_parent
	belongs_to :user
	has_and_belongs_to_many :tags
	has_and_belongs_to_many :image_items

	def self.GetPosts(limit = nil)
		limit = nil ? -1 : limit
		return Post.desc(:created_at).limit(limit)
	end

	def self.GetRootPosts(limit = nil)
		limit = nil ? -1 : limit
		return Post.desc(:created_at).where(:has_parent => false).limit(limit)
	end

	def self.GetRootPostsForTop(topPostId, limit = nil)
		limit = nil ? -1 : limit
		topPostCreatedAt = Post.find(topPostId)[:created_at]
		return Post.desc(:created_at).where(:has_parent => false).where(:created_at.gt => topPostCreatedAt).limit(limit)
	end

	def self.GetRootPostsForBottom(bottomPostId, limit = nil)
		limit = nil ? -1 : limit
		bottomPostCreatedAt = Post.find(bottomPostId)[:created_at]
		return Post.desc(:created_at).where(:has_parent => false).where(:created_at.lt => bottomPostCreatedAt).limit(limit)
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
		topPostCreatedAt = PostChild.where(:child_post_id => topPostId).first[:created_at]
		parentPost.post_children.desc(:created_at).where(:created_at.gt => topPostCreatedAt).limit(limit).each{
			|x|
			result.push(Post.find(x.child_post_id))
		}
		return result
	end

	def self.GetPostsForBottomFromParentPost(bottomPostId, parentPostId, limit = nil)
		result = []
		parentPost = Post.find(parentPostId)
		bottomPostCreatedAt = PostChild.where(:child_post_id => bottomPostId).first[:created_at]
		parentPost.post_children.desc(:created_at).where(:created_at.lt => bottomPostCreatedAt).limit(limit).each{
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
		post.has_parent = parentPostId ? true : false
		post.save

		if parentPostId
			parentPost = Post.find(parentPostId)
			parentPost.num_children += 1
			parentPost.save

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

	def self.DeletePost(postId)
		post = Post.find(postId)
		if post.has_parent
			postParent = post.post_parent
			parentPost = Post.find(postParent.parent_post_id)
			parentPost.num_children -= 1
			parentPost.save

			postChild = parentPost.post_children.where(:child_post_id => post.getId)
			postChild.destroy

			postParent.destroy
		end
		if post.num_children > 0
			post.post_children.each{
				|eachPostChild|
				Post.DeletePost(eachPostChild.child_post_id)
				eachPostChild.destroy
			}
		end
		post.destroy
		return 0
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
