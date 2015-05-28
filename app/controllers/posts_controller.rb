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
        if params[:from_index]
          sub_content = post_params[:content]


          while sub_content.index('img src="') != nil do
            sub_content = sub_content[sub_content.index('img src="')+1..-1]
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
          redirect_to root_url, notice: '发帖成功'
          # render json: image_urls

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
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :content, :user_id)
    end
end
