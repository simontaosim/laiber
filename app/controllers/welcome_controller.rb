class WelcomeController < ApplicationController

  skip_before_filter :verify_authenticity_token, only: [:get_user_info]

  def index
  	redirect_to welcome_show_posts_path
  end

  def show_posts
    @title = 'Laiber——改变世界的愿景'
    @posts = Post.where(:title.gt => '' ).desc(:created_at).pluck(:id, :title, :image_item_ids, :created_at, :tag_ids)
    @post = Post.new
    
    if session[:progress]
      @user_session = UserSession.find(session[:progress].fetch("_id").fetch("$oid"))
    end
    @tags = Tag.all
    if params[:tag_id]
      @posts = nil
      @posts = Tag.find(params[:tag_id]).posts.pluck(:id, :title, :image_item_ids, :created_at, :tag_ids)
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
