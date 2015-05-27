class MobileApp::PostsController < ApplicationController
	use Rack::Cors do
		allow do
			origins '*', 'null'
			resource '*', :headers => :any, :methods => [:get, :post]
		end
	end
	skip_before_filter :verify_authenticity_token, only: [:new, :get]

	def all
		render json:{"posts":Post.all, "users":User.all}
	end

	def new
		result = false
		if params[:post]
			post = Post.new(new_post_params)
			# current_user = User.find(Utils::DbUtil.GetObjectIdFromJson(user_params))
			current_user = UserSession.find(session[:progress]["_id"]["$oid"]).user
			if current_user
				post.user = current_user
				if post.save
					result = true
				end
			end
		end
		if result
			render json: 1
		else
			render json: 0
		end
	end

	def get
		if params[:posts]
			if params[:post_parent]
				render json: get_posts_from_parent(get_posts_from_parent_params)
			else
				render json: get_posts(get_posts_params)
			end
		else
			render json: 0
		end


	end

	def test
		render json: session[:progress]
	end

	private

	def get_posts(get_posts_params)
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

	def get_posts_params
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