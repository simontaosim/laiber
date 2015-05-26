class Utils::DbUtil
	def self.GetObjectIdFromJson(object)
		res = nil
		begin
			res = JSON.parse(object[:_id]).fetch("$oid")
		rescue Exception => e
		end
		return res
	end

	def self.GetObjectIdFromHash(object)
		res = nil
		begin
			res = object["_id"].fetch("$oid")
		rescue Exception => e
		end
		return res
	end
end