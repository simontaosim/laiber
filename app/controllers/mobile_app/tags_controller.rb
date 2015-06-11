class MobileApp::TagsController < ApplicationController
	use Rack::Cors do
		allow do
			origins '*', 'null'
			resource '*', :headers => :any, :methods => [:get, :post]
		end
	end
	skip_before_filter :verify_authenticity_token, only: [:all]

	# 获取所有Tags
	# 参数：无
	# 返回：[{id:*, name:*}]
	def all
		render json: {"tags": Tag.GetTags}
	end

end