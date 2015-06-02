class User < ModelBase
<<<<<<< HEAD
  include Mongoid::Document
  attr_accessor :password, :password_confirmation
  include Mongoid::Timestamps
  has_many :user_sessions,  dependent: :destroy
  has_many :posts, dependent: :destroy
  has_many :sign_tokens, dependent: :destroy
  has_many :followers, dependent: :destroy
  field :name, type: String
  field :email, type: String
  field :mobile, type: String
  field :screct_pass, type: String
  field :invite_code, type: String
  
  validates_confirmation_of :password
  validates :password, confirmation: true
  validates_length_of       :name,    :within => 3..100
  validates_uniqueness_of   :name,    :case_sensitive => false, :massage => '用户名已经存在'
=======
	include Mongoid::Document
	attr_accessor :password, :password_confirmation
	include Mongoid::Timestamps
	has_many :user_sessions,  dependent: :destroy
	has_many :posts, dependent: :destroy
	has_many :sign_tokens, dependent: :destroy
	has_many :post_favors, dependent: :destroy
	field :name, type: String
	field :email, type: String
	field :mobile, type: String
	field :screct_pass, type: String
	field :invite_code, type: String
>>>>>>> 14acdf0d0e349d51cda1c3fc34171929fc94becf

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