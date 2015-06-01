class WelcomeController < ApplicationController

  def index
  	@title = 'Laiber——改变世界的愿景'
  	@posts = Post.desc(:created_at).pluck(:id, :title, :image_item_ids, :created_at)
    @post = Post.new
    if session[:progress]
    	@user_session = UserSession.find(session[:progress].fetch("_id").fetch("$oid"))
    end
  end

  def get_one_post
    @post = Post.find(params[:id])
    render json: @post
  end

  def get_user_info
  	@user = User.find(params[:id])
  	render json: @user
  end

  def post_one_comment
  	@posts = Post.NewPost(params[:title], params[:content], params[:user_id], params[:post_id])
  	render json: @posts
  end

  def get_comments
  	if params[:limit]
  		render json: Post.GetPostsFromParentPost(params[:parent_id], params[:limit])
  	else
  		render json: Post.GetPostsFromParentPost(params[:parent_id], nil)
  	end
  end
end
