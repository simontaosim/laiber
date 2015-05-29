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
		Post.all.each_with_index{
			|x, index|
			result[index] = x.getPostAndUser
		}
		render json: result
	end

	# 发帖
	# 参数：post[title]帖子标题 post[content]帖子内容 parent_post[id]父帖子id
	# 可选参数：token用户验证
	# 成功：1
	# 失败：0
	def new
		result = false
		if params[:post]
			if params[:token]
				signTokenId = params[:token]
			else
				signTokenId = session[:signToken]
			end
			currentUserId = SignToken.find(signTokenId).user.getId

			Post.NewPost(params[:post][:title], params[:post][:content], currentUserId, params[:parent_post][:id])
		end
		if result
			render json: 1
		else
			render json: 0
		end
	end

	# 获取帖子
	# 参数：posts[num]数量 posts_for_top[id]请求更新的帖子 posts_for_bottom[id]请求更老的帖子 post_parent[id]父帖子id
	# 可选参数：
	def get
		result = false
		if params[:post_parent]
			post = Post.find(params[:post_parent][:id])
			postChildren = []
			post.post_children.each{
				|x|
				postChildren.push(Post.find(x[:post_child_id]))
			}


		end

		if params[:posts]
			render json: get_posts
		else
			render json: -1
		end
	end

	def testName
		# render json: testparam()
	end

	def test
		res = []
		Post.GetPosts(2, 0).each{|x| res.push(x.post_parent)}
		render json: res

	end

	private

	def get_posts
		if params[:posts_for_top]
			return package_posts_data(Post.PostsHelper.get_posts_for_top(get_posts_params, get_posts_for_top_params))
		elsif params[:posts_for_bottom]
			return package_posts_data(Post.PostsHelper.get_posts_for_bottom(get_posts_params, get_posts_for_bottom_params))
		else 
			return package_posts_data(Post.PostsHelper.get_posts(get_posts_params))
		end

		# render json: Helpers::PostsHelper.Instance.get_posts
	end

	def get_posts_from_parent(args)
		return "TODO"
	end

	def new_post_params
		params.require(:post).permit(:title, :content)
	end

	def user_params
		params.require(:user).permit(:_id)
	end

	def paramsGetPosts
		params.require(:posts).permit(:num)
	end

	def get_posts_for_top_params
		params.require(:posts_for_top).permit(:_id)
	end

	def get_posts_for_bottom_params
		params.require(:posts_for_bottom).permit(:_id)
	end

	def get_posts_from_parent_params
		params.require(:post_parent).permit(:_id)
	end

	def package_posts_data(posts)
		posts_data = []
		posts.each_with_index{
			|x, index|
			if x
				user_oid = x["user_id"]["$oid"]
				posts_data[index] = {post:x, user:User.find(user_oid)}
			end
		}
		# return posts.count
		return {posts:posts_data}
	end
end