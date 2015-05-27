class WelcomeController < ApplicationController

  def index
  	@title = 'Laiber——改变世界的愿景'
  	@posts = Post.limit()
    @post = Post.new
  end
end
