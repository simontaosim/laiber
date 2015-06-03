class MobileApp::UserController < ApplicationController
	use Rack::Cors do
		allow do
			origins '*', 'null'
			resource '*', :headers => :any, :methods => [:get, :post]
		end
	end
	skip_before_filter :verify_authenticity_token, only: [:setPostFavor, :getFavorPosts, :getRootPosts]

	# 设置用户帖子收藏关系
	# 参数：isFavor收藏关系true/false post[id]帖子id
	# 浏览器端参数：token用户验证
	# 成功：0
	# 失败：-1
	def setPostFavor
		currentUser = User.GetCurrentUser(params[:token])
		currentUser.setPostFavor(params[:isFavor] == "true", params[:post][:id])
		render json: 0
	end

	# 获取用户收藏的帖子
	# 浏览器端参数：token用户验证
	# 返回：{posts:[{post:{id:*, title:*, content:*}, user:{id:*, name:*}}, ...}
	def getFavorPosts
		result = []
		currentUser = User.GetCurrentUser(params[:token])
		currentUser.getFavorPosts.each{
			|eachFavorPost|
			result.push(eachFavorPost.getPostAndUser)
		}
		render json: {"posts": result}
	end

	# 获取用户发布的帖子（根帖子，不包含子帖子）
	# 浏览器端参数：token用户验证
	# 返回：{posts:[{post:{id:*, title:*, content:*}}, ...}
	def getRootPosts
		result = []
		currentUser = User.GetCurrentUser(params[:token])
		currentUser.getRootPosts.each{
			|eachPost|
			result.push({"post": eachPost.getPost})
		}
		render json: {"posts": result}
	end
end