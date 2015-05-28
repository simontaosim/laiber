class SignToken < ModelBase
	include Mongoid::Document
	include Mongoid::Timestamps
	belongs_to :user

	def getToken
		return json: {"token": getId}
	end
end