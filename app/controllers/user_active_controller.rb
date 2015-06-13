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
    @user_session = nil
    if session[:progress]
      @user_session = UserSession.find(session[:progress].fetch("_id").fetch("$oid"))
    end
    if @user_session
      if params[:user_id] or params[:post_id]
        @post_favor = PostFavor.NewPostFavor(@user_session.user.id, params[:post_id])
        @msg = '帖子收藏成功！'
      else
        @msg = '帖子收藏失败！'
      end
      
    else
      @msg = '请先登录'
    end
    render plain: @msg
  	
  end

  def cancel_collect_post
  	if params[:post_favor_id]
  		@post_favor = PostFavor.where(id:params[:post_favor_id])
  		if @post_favor.length > 1
  			@post_favor.destroy
  			@msg = '已取消收藏'
  		elsif params[:user_id] and params[:post_id]
  			PostFavor.where(user_id: params[:user_id], favor_post_id: params[:post_id]).destroy
  			@msg = '已取消收藏'
  		end
  	else
  	     @msg = '异常'
  	end
    @user_session = nil
    if session[:progress]
      @user_session = UserSession.find(session[:progress].fetch("_id").fetch("$oid"))
    end
    if @user_session
      if params[:user_id] or params[:post_id]
        PostFavor.where(user_id: @user_session.user.id, favor_post_id: params[:post_id]).destroy
        @msg = '已取消收藏'
      end
    else
      @msg = "请先登录"
      
    end
    render plain: @msg
  end#end of function

  def to_follow
    @msg = '内部错误'
    if params[:user_id]
      @follower = Follower.new
      @follower.follower_id = params[:user_id]

      if @follower.save
        @msg = '关注成功'
      else
        @msg = '关注失败，烦请重试!'
      end
    end
    render plain: @msg
    
  end

  def is_collected
    @msg = '内部错误'
    @user_session = nil
    if session[:progress]
      @user_session = UserSession.find(session[:progress].fetch("_id").fetch("$oid"))
    end
    if params[:post_id]
      post_favors = PostFavor.where(user_id: @user_session.user.id, favor_post_id: params[:post_id]);
      if post_favors.length > 0
        @msg = 1
      else
        @msg = 0
      end
    else
       @msg = -1
    end
    render plain: @msg
  end

  def to_cancel_follow
    @msg = '内部错误'
    if params[:user_id]
      @follower = Follower.find(params[:user_id])
      if @follower.destroy
        @msg = '取消关注成功！'
      end
    else
      @msg = '取消关注失败，烦请重试！'
    end
    render plain: @msg
  end#to_cancel_follow

end
