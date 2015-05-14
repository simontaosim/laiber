class User
  include Mongoid::Document
  include Mongoid::Timestamps
  field :name, type: String
  field :email, type: String
  field :mobile, type: String
  field :screct_pass, type: String
  field :invite_code, type: String
  attr_accessor :password, :password_confirm

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
