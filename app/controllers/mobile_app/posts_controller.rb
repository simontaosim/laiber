class MobileApp::PostsController < ApplicationController
	use Rack::Cors do
		allow do
			origins '*', 'null'
			resource '*', :headers => :any, :methods => [:get, :post]
		end
	end
	skip_before_filter :verify_authenticity_token, only: [:new, :get]

	def all
		# render json:{"posts":Post.all, "users":User.all}
		result = []
		Post.GetPosts.each{
			|x|
			result.push(x.getPostAndUser)
		}
		render json: result
	end

	# 发帖
	# 参数：post[title]帖子标题 post[content]帖子内容 parent_post[id]父帖子id
	# 浏览器端参数：token用户验证
	# 成功：1
	# 失败：0
	def new
		flag = false
		if params[:post]
			currentUserId = User.GetCurrentUser(params[:token]).getId
			parentPostId = params[:parent_post] ? params[:parent_post][:id] : nil

			Post.NewPost(params[:post][:title], params[:post][:content], currentUserId, parentPostId)
			flag = true
		end
		if flag
			render json: 1
		else
			render json: 0
		end
	end

	# 获取帖子{posts:[{post:{id:*, title:*, content:*}, user:{id:*, name:*}}, ...]}
	# 参数：posts[num]数量 posts_for_top[id]请求更新的帖子 posts_for_bottom[id]请求更老的帖子 parent_post[id]父帖子id
	# 成功：{parent_post:{post:{id:*, title:*, content:*, created_at:*}, user:{id:*, name:*}, isFavor:*}, posts:[{post:{id:*, title:*, content:*, created_at:*}, user:{id:*, name:*}}, ...]}
	# 失败：-1
	def get
		flag = false
		result = []
		if params[:parent_post]
			parentPost = Post.find(params[:parent_post][:id])
			# 查询parent_post[id]的子帖子
			if params[:posts_for_top]
				# 查询最新帖子
				Post.GetPostsForTopFromParentPost(params[:posts_for_top][:id], params[:parent_post][:id], params[:posts][:num]).each{
					|x|
					result.push(x.getPostAndUser)
				}
			elsif params[:posts_for_bottom]
				Post.GetPostsForBottomFromParentPost(params[:posts_for_bottom][:id], params[:parent_post][:id], params[:posts][:num]).each{
					|x|
					result.push(x.getPostAndUser)
				}
			else
				Post.GetPostsFromParentPost(params[:parent_post][:id], params[:posts][:num]).each{
					|x|
					result.push(x.getPostAndUser)
				}
			end
			render json: {"parent_post": parentPost.getPostAndUserAndIsFavor, "posts": result}
			return
		else
			# 查询根帖子
			if params[:posts_for_top]
				Post.GetRootPostsForTop(params[:posts_for_top][:id], params[:posts][:num]).each{
					|x|
					result.push(x.getPostAndUser)
				}
			elsif params[:posts_for_bottom]
				Post.GetRootPostsForBottom(params[:posts_for_bottom][:id], params[:posts][:num]).each{
					|x|
					result.push(x.getPostAndUser)
				}
			else
				Post.GetRootPosts(params[:posts][:num]).each{
					|x|
					result.push(x.getPostAndUser)
				}
			end
			render json: {"posts": result}
			return
		end

		render json: -1
		return
	end
end