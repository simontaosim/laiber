class User < ModelBase
	include Mongoid::Document
	attr_accessor :password, :password_confirmation
	include Mongoid::Timestamps
	has_many :user_sessions,  dependent: :destroy
	has_many :posts, dependent: :destroy
	has_many :sign_tokens, dependent: :destroy
	has_many :post_favors, dependent: :destroy
	has_many :followers, dependent: :destroy
	field :name, type: String
	field :email, type: String
	field :mobile, type: String
	field :screct_pass, type: String
	field :invite_code, type: String

	validates_confirmation_of :password
	validates :password, confirmation: true
	validates_length_of :name, :within => 3..100
	validates_uniqueness_of :name, :case_sensitive => false, :massage => '用户名已经存在'

	def self.GetCurrentUser(token = nil)
		signTokenId = token ? token : session[:signToken]
		SignToken.find(signTokenId).user
	end

	def isPostFavor(postId)
		return self.post_favors.where(:favor_post_id => postId).exists?
	end

	def setPostFavor(isFavor, postId)
		if isFavor != isPostFavor(postId)
			if isFavor
				PostFavor.NewPostFavor(getId, postId)
			else
				self.post_favors.where(:favor_post_id => postId).first.destroy
			end
		end
		return 0
	end

	def getFavorPosts
		result = []
		self.post_favors.desc(:created_at).each{
			|eachPostFavor|
			result.push(Post.find(eachPostFavor.favor_post_id))
		}
		return result
	end

	def getRootPosts
		return self.posts.desc(:created_at).where(:has_parent => false)
	end

	def auth_pass(pass)
		if self.screct_pass == self.md5(pass)
			self
		else
			nil
		end
	end

	def md5(pass)
		Digest::MD5.hexdigest(pass)
	end

end