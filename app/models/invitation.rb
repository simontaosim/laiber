class Invitation
  include Mongoid::Document
  include Mongoid::Timestamps
  belongs_to :user
  field :code, type: String

  def generate_code 
  	dir = Array.new
  	dir = [*'a'..'z',*'0'..'9']
    self.code = dir.sample(4).join
    self.save
  end    
end
