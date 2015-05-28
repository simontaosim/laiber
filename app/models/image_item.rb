class ImageItem
  include Mongoid::Document
  include Mongoid::Timestamps
  mount_uploader :url, AvatarUploader
  field :url_from_content, type: String
  has_and_belongs_to_many :posts
end
