class Utils::DbUtil
	def self.GetObjectId(object)
		return JSON.parse(object[:_id]).fetch("$oid")
	end
end