class HomeController < ApplicationController
  layout 'home'
  def index
  	@post = Post.all
  end
end
