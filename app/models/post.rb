class Post
	include Mongoid::Document
	include Mongoid::Timestamps
	field :title, type: String
	field :content, type: String
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

	def self.GetPosts(getPostsParams)

	end

	def getPostOnly
		return {"id": JSON.parse(self.id.to_json)["$oid"], "title": self.title, "content": self.content}
	end

	def getUserOnly
		return {"id": JSON.parse(self.user.id.to_json)["$oid"], "name": self.user.name}
	end
	
	def getTagsOnly
		res = []
		self.tags.each_with_index{
			|x, index|
			res[index] = {"id": JSON.parse(x.id.to_json)["$oid"], "name": x.name}
		}
		return res
	end

	def getPostAndUser
		return {"post": getPostOnly, "user": getUserOnly}
	end

	def getPostAndUserAndTags
		return {"post": getPostOnly, "user": getUserOnly, "tags": getTagsOnly}
	end

	
end
