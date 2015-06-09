class Invitation
  include Mongoid::Document
  include Mongoid::Timestamps
  belongs_to :user
  field :code, type: String

  def generate_code(i=0)
    j = i #记录递归次数
  	dir = Array.new
  	dir = [*'a'..'z',*'0'..'9']
    code = Invitation.where(code: dir.sample(4).join).first
    if code
      j =+ 1
      self.generate_code(j)
    else
      self.code = dir.sample(4).join
      self.save
      return  j
    end
  end    
end
