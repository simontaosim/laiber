class PersonalCenterController < ApplicationController
  def index
    if params[:user_id]
      @user_id = params[:user_id]
    else
      @user_id = nil
    end
    
  	@title = 'LAIBER——个人中心'
  	if session[:progress]
      @user = UserSession.find(session[:progress].fetch("_id").fetch("$oid")).user
    elsif params[:user_id] and session[:progress]
      @user = User.find(params[:user_id])
    else
        redirect_to root_url
    end

    @followers_count = Follower.where(user: @user).count
    @folloeds = Follower.where(follower_id: @user.id).count


  end

  def upload
  	@user =User.find(user_params[:id])
    @user.update_attribute('head_url', user_params[:head_url]) 
    render json: @user
  end

  def generate_code
    
  end
  
  def edit
    @title = 'LAIBER——个人中心'
    if session[:progress]
      @user = UserSession.find(session[:progress].fetch("_id").fetch("$oid")).user
    elsif params[:user_id] and session[:progress]
      @user = User.find(params[:user_id])
    else
        redirect_to root_url
    end

    @followers_count = Follower.where(user: @user).count
    @folloeds = Follower.where(follower_id: @user.id).count

  end
  private
  def user_params
      params.require(:user).permit(:id, :head_url)
  end
end
