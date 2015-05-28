class ModelBase
	def getId
		return JSON.parse(self.id.to_json)["$oid"].to_s
	end
end