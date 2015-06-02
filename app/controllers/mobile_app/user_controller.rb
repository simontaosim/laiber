class MobileApp::UserController < ApplicationController
	use Rack::Cors do
		allow do
			origins '*', 'null'
			resource '*', :headers => :any, :methods => [:get, :post]
		end
	end
	skip_before_filter :verify_authenticity_token, only: [:setPostFavor, :getFavorPosts]

	# 设置帖子收藏关系
	# 参数：isFavor收藏关系true/false post[id]帖子id
	# 可选参数：token用户验证
	# 成功：0
	# 失败：-1
	def setPostFavor
		currentUser = User.GetCurrentUser(params[:token])
		currentUser.setPostFavor(params[:isFavor] == "true", params[:post][:id])
		render json: 0
	end

	# 获取收藏的帖子
	# 可选参数：token用户验证
	# 返回：{posts:[*帖子完整数据固定格式*, *帖子完整数据固定格式*]}
	def getFavorPosts
		result = []
		currentUser = User.GetCurrentUser(params[:token])
		currentUser.getFavorPosts.each{
			|eachFavorPost|
			result.push(eachFavorPost.getPostAndUser)
		}
		render json: {"posts": result}
	end
end