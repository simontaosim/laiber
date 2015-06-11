class Tag < ModelBase
	include Mongoid::Document
	include Mongoid::Timestamps
	field :name, type: String
	has_and_belongs_to_many :posts

	def self.GetTags
		result = []
		self.Get.each{
			|eachTag|
			result.push({"id": eachTag.getId, "name": eachTag.name})
		}
		return result
	end
end
