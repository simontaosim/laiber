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
		if new_post_params
			@post = Post.new(new_post_params)
			currUser = User.find(Utils::DbUtil.GetObjectId(user_params))
			# currUser = UserSession.find(session[:progress]["_id"]["$oid"]).user
			if currUser
				@post.user = currUser
				if @post.save
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

	def test
		render json: UserSession.find(session[:progress]["_id"]["$oid"]).user
	end

	private
	def new_post_params
		params.require(:post).permit(:title, :content)
	end
	def user_params
		params.require(:user).permit(:_id)
	end
end