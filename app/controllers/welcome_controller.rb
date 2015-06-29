class WelcomeController < ApplicationController

  skip_before_filter :verify_authenticity_token, only: [:get_user_info, :get_next_15_posts]
  def index
  	redirect_to welcome_show_posts_path
  end

  def show_posts
    @title = 'Laiber——改变世界的愿景'
    @posts = Post.GetRootPublishedPosts(15).pluck(:id, :title, :image_item_ids, :created_at, :tag_ids)
    @post = Post.new

    if session[:progress]
      @user_session = UserSession.find(session[:progress].fetch("_id").fetch("$oid"))
    end
    @tags = Tag.all
    if params[:tag_id]
      @notice = Tag.find(params[:tag_id]).name
      @posts = nil
      @posts = Tag.find(params[:tag_id]).posts.pluck(:id, :title, :image_item_ids, :created_at, :tag_ids)
    end

  end
  def get_next_15_posts
    @posts = Post.GetRootPublishedPostsForBottom(params[:post_id], 15).pluck(:id, :title, :image_item_ids, :created_at, :tag_ids)
    render json: @posts
  end

  def get_image_by_id
    image_item = ImageItem.find(params[:id])
    render json: image_item
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
  def get_tags
    tags = Array.new
    devide_string_to_array('|^', params[:tag_ids]).each do |tag_id|
      tag_names.push(Tag.find(tag_id))
    end
    render json: tags
  end
  private
  def devide_string_to_array(devide_key, content)
      items = Array.new
      sub_content = content
          while sub_content.index(devide_key) != nil do
            sub_content = sub_content[sub_content.index(devide_key)+devide_key.length..-1]
            if sub_content.index(devide_key) == nil and sub_content != nil
              item = sub_content[0..-1]
              items.push(item)
              break
            else
              item = sub_content[0..sub_content.index(devide_key)-1]
              items.push(item)
            end
          end
      items
  end
end
