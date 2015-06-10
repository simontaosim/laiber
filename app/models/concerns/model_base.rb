class ModelBase
	def self.Get(limit = nil)
		limit = limit ? limit : -1;
		self.desc(:created_at).limit(limit)
	end

	def getId
		return JSON.parse(self.id.to_json)["$oid"]
	end
end