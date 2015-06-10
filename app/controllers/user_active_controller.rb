class UserActiveController < ApplicationController
layout 'foundation_view'
skip_before_filter :verify_authenticity_token, only: [:collect_post]
  def login
  	@user = User.new
  end

  def logout
  end

  def reg
  	@user = User.new
  end

  def collect_post
  	if params[:user_id] and params[:post_id]
  		@post_favor = PostFavor.NewPostFavor(params[:user_id], params[:post_id])
  		@msg = '帖子收藏成功！'
  	else
  		@msg = '帖子收藏失败！'
  	end
  	render plain: @msg
  end

  def cancel_collect_post
  	if params[:post_favor_id]
  		@post_favor = PostFavor.where(id:params[:post_favor_id])
  		if @post_favor.length > 1
  			@post_favor.destroy
  			@msg = '已取消收藏'
  			render plain: @msg
  		elsif params[:user_id] and params[:post_id]
  			PostFavor.where(user_id: params[:user_id], favor_post_id: params[:post_id]).destroy
  			@msg = '已取消收藏'
  		end
  	else
  		render plain: '异常'
  	end
  	if params[:user_id] and params[:post_id]
  			PostFavor.where(user_id: params[:user_id], favor_post_id: params[:post_id]).destroy
  			@msg = '已取消收藏'
  			render plain: @msg
  	end

  	
  end
end
