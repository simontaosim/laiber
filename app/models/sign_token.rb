class SignToken < ModelBase
	include Mongoid::Document
	include Mongoid::Timestamps
	belongs_to :user

	def getToken
		return {"token": getId}
	end
end