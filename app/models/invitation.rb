class Invitation
  include Mongoid::Document
  include Mongoid::Timestamps
  belongs_to :user
  field :code, type: String

  def generate_code 
  	dir = Array.new
  	dir = [*'a'..'z',*'0'..'9']
    code = Invitation.where(code: dir.sample(4).join).first
    if code
      self.generate_code
    else
      self.code = code
      self.save
      return code
    end
  end    
end
