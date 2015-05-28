class ModelBase
	def getId
		return JSON.parse(self.user.id.to_json)["$oid"]
	end
end