class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.all
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
  end

  # GET /posts/new
  def new
    @post = Post.new
  end

  # GET /posts/1/edit
  def edit
  end

  def all
    render json: Post.all
  end
  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params)


    image_urls = Array.new

      if @post.save
        ########装照片
        if params[:from_index]
          sub_content = post_params[:content]
          while sub_content.index('src="') != nil do
            sub_content = sub_content[sub_content.index('src="')+1..-1]
            sub_content = sub_content[sub_content.index('"')+1..-1]
            img_url = sub_content[1..sub_content.index('"')-1]
            image_urls.push(img_url)
          end
          image_items = Array.new
          image_urls.each do |url|
            image_item = ImageItem.new
            image_items.push(image_item)
            image_item.posts.push(@post)
            image_item.url_from_content = url
            image_item.save
          end
          @post.image_items.push(image_items)
          @post.save

          ########装照片
          ##存标签
          
          devide_string_to_array('|^',params[:tag_ids]).each do |tag_id|
            tag = Tag.find(tag_id)
            @post.tags.push(tag)
            tag.posts.push(@post)
            tag.save
            @post.save
          end


          ##存标签
          if params[:is_publish] == 'true'
            @post.is_publish = 1
            @post.save
          else
            @post.is_publish = 0
            @post.save
          end
          if params[:from_foundation]
            if params[:is_publish] == 'false'

              redirect_to idea_store_post_a_post_path+"?draft_id="+@post.id.to_s

            else
              redirect_to idea_store_index_path, notice: '发帖成功'

            end
            
          else
            redirect_to welcome_index_url, notice: '发帖成功'
          end
          
          #render plain: image_urls

        else
          redirect_to @post, notice: '发帖成功'
        end

      else
        render :new
        render json: @post.errors, status: :unprocessable_entity
      end

  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
     Post.DeletePost(@post.getId())
      if params[:from_user] or params[:from_user_all]
          if params[:from_user_all]
            redirect_to users_show_all_posts_by_user_id_path(user_id:params[:user_id]), notice: '成功删除' 
          else
            redirect_to user_path(params[:user_id]), notice: '成功删除' 
          end
          
      else
          redirect_to posts_url, notice: 'Post was successfully destroyed.' 
      end

      

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :content, :user_id, :tag_ids)
    end

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
