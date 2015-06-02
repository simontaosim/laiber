class MobileApp::UserController < ApplicationController
	use Rack::Cors do
		allow do
			origins '*', 'null'
			resource '*', :headers => :any, :methods => [:get, :post]
		end
	end
	skip_before_filter :verify_authenticity_token, only: [:new, :get]

	# 设置帖子收藏关系
	# 参数：isFavor收藏关系true/false post[id]帖子id
	# 可选参数：token用户验证
	# 成功：0
	# 失败：-1
	def setPostFavor
		currentUser = User.GetCurrentUser(params[:token])
		currentUser.setPostFavor(params[:isFavor] == "true", params[:post][:id])
	end
end