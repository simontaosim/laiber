class User
  include Mongoid::Document
  include Mongoid::Timestamps
  field :name, type: String
  field :email, type: String
  field :mobile, type: String
  field :screct_pass, type: String
  field :invite_code, type: String
  attr_accessor :password, :password_confirm
end
