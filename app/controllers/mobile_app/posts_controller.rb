class MobileApp::PostsController < ApplicationController
	use Rack::Cors do
		allow do
			origins '*', 'null'
			resource '*', :headers => :any, :methods => [:get, :post, :options]
		end
	end
	skip_before_filter :verify_authenticity_token, only: [:new]

	def all
		render json:{"posts":Post.all, "users":User.all}
	end

	def new
		result = false
		if params[:post] && params[:user]
			post = Post.new(new_post_params)
			currUser = User.find(Utils::DbUtil.GetObjectId(user_params))
			# currUser = UserSession.find(session[:progress]["_id"]["$oid"]).user
			if currUser
				post.user = currUser
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
		if params[:post]
			if params[:post_parent]
				get_posts_from_parent(get_posts_from_parent_params)
			else
				get_posts(get_posts_params)
			end
		else
			render json: 0
		end


	end

	def test
		render json: UserSession.find(session[:progress]["_id"]["$oid"]).user
	end

	private

	def get_posts(args)
		if params[:post_for_top]
			render json: "TODO"
		elsif params[:post_for_bottom]
			render json: "TODO"
		else 
			render json: 0
		end

		# render json: Helpers::PostsHelper.Instance.get_posts
	end

	def get_posts_from_parent(args)
		render json: "TODO"
	end

	def new_post_params
		params.require(:post).permit(:title, :content)
	end

	def user_params
		params.require(:user).permit(:_id)
	end

	def get_posts_params
		params.require(:post).permit(:num)
	end

	def get_posts_for_top_params
		params.require(:post_for_top).permit(:_id)
	end

	def get_posts_for_bottom_params
		params.require(:post_for_bottom).permit(:_id)
	end

	def get_posts_from_parent_params
		params.require(:post_parent).permit(:_id)
	end
end