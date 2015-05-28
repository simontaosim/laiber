class User
  include Mongoid::Document
  attr_accessor :password, :password_confirmation
  include Mongoid::Timestamps
  has_many :user_sessions,  dependent: :destroy
  has_many :posts, dependent: :destroy
  has_many :sign_tokens, dependent: :destroy
  field :name, type: String
  field :email, type: String
  field :mobile, type: String
  field :screct_pass, type: String
  field :invite_code, type: String
  
  validates_confirmation_of :password
  validates :password, confirmation: true
  validates_length_of       :name,    :within => 3..100
  validates_uniqueness_of   :name,    :case_sensitive => false, :massage => '用户名已经存在'

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
