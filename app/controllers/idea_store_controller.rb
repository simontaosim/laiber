class IdeaStoreController < ApplicationController
  layout 'foundation_view'

  def index
  	@title = 'Laiber——改变世界的愿景'
    @posts = Post.where(:title.gt => '' ).desc(:created_at).limit(15).pluck(:id, :title, :image_item_ids, :created_at, :tag_ids)
    @post = Post.new
  end

  def post_a_post
    @user_session = nil
    if session[:progress]
      @user_session = UserSession.find(session[:progress].fetch("_id").fetch("$oid"))
    else
      redirect_to user_active_login_path, notice: '请先登录！'
    end
    @post = Post.new 
    
  end

  def get_posts
  	@title = 'Laiber——改变世界的愿景'
    @posts = Post.where(:title.gt => '' ).desc(:created_at).limit(15).pluck(:id, :title, :image_item_ids, :created_at, :tag_ids)
    @post = Post.new
    render json: @posts
  end

  def get_tags
  	render json: Tag.all
  end

  def get_session
  	@user_session = nil
  	if session[:progress]
      @user_session = UserSession.find(session[:progress].fetch("_id").fetch("$oid"))
    end
    render json: @user_session
  end

  def get_one_post
  	@post = Post.find(params[:post_id])
  	render json: @post
  end

  def get_comments
  	if params[:limit]
  		render json: Post.GetPostsFromParentPost(params[:parent_id], params[:limit])
  	else
  		render json: Post.GetPostsFromParentPost(params[:parent_id], nil)
  	end
  end

  def get_post_from_topid
  	
  end

end
