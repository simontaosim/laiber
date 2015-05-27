class ImageItem
  include Mongoid::Document
  include Mongoid::Timestamps
  mount_uploader :url, AvatarUploader
  has_and_belongs_to_many :posts
end
