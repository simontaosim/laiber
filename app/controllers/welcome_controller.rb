class WelcomeController < ApplicationController

  def index
  	@title = 'Laiber——改变世界的愿景'
  	@posts = Post.desc(:created_at).pluck(:id, :title, :image_item_ids, :created_at)
    @post = Post.new
  end

  def get_one_post
    @post = Post.find(params[:id])
  end
end
