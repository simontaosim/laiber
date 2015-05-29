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
		flag = false
		if params[:post]
			if params[:token]
				signTokenId = params[:token]
			else
				signTokenId = session[:signToken]
			end
			currentUserId = SignToken.find(signTokenId).user.getId
			parentPostId = params[:parent_post] ? params[:parent_post][:id] : nil

			Post.NewPost(params[:post][:title], params[:post][:content], currentUserId, parentPostId)
		end
		if result
			flag json: 1
		else
			flag json: 0
		end
	end

	# 获取帖子
	# 参数：posts[num]数量 posts_for_top[id]请求更新的帖子 posts_for_bottom[id]请求更老的帖子 parent_post[id]父帖子id
	# 成功：{parent_post:*, posts:[*,*]}
	# 失败：-1
	def get
		flag = false
		result = []
		if params[:parent_post]
			# 查询parent_post[id]的子帖子
			parentPost = Post.find(params[:parent_post][:id])
			posts = parentPost.post_children
			if params[:posts_for_top]
				# 查询最新帖子
				topPost = Post.find(params[:posts_for_top][:id])
				# Post.GetPosts(topPost.index, 0).where(:post_parent)
				parentPost.post_children.desc(:created_at).where(:created_at > topPost[:created_at]).limit(params[:posts][:num]).each{
					|x|
					result.push(Post.find(x.child_post_id).getPostAndUser)
				}
			elsif params[:posts_for_bottom]
				bottomPost = Post.find(params[:posts_for_bottom][:id])
				parentPost.post_children.desc(:created_at).where(:created_at < bottomPost[:created_at]).limit(params[:posts][:num]).each{
					|x|
					result.push(Post.find(x.child_post_id).getPostAndUser)
				}
			else
				parentPost.post_children.desc(:created_at).limit(params[:posts][:num]).each{
					|x|
					result.push(Post.find(x.child_post_id).getPostAndUser)
				}
			end
			render json: {"parent_post": parentPost.getPostAndUser, "posts": result}
			return
		else
			# 查询根帖子
			if params[:posts_for_top]
				topPost = Post.find(params[:posts_for_top][:id])
				Post.desc(:created_at).where(:created_at > topPost[:created_at]).limit(params[:posts][:num]).each{
					|x|
					result.push(x.getPostAndUser)
				}
			elsif params[:posts_for_bottom]
				bottomPost = Post.find(params[:posts_for_bottom][:id])
				Post.desc(:created_at).where(:created_at < bottomPost[:created_at]).limit(params[:posts][:num]).each{
					|x|
					result.push(x.getPostAndUser)
				}
			else
				Post.desc(:created_at).limit(params[:posts][:num]).each{
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