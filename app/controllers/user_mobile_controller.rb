class UserMobileController < ApplicationController
  use Rack::Cors do
  	allow do
    # put real origins here
  	  origins '*', 'null'
    # and configure real resources here
   	 resource '*', :headers => :any, :methods => [:get, :post, :options]
  	end
  end
  def create
    @user = User.new(user_params)
    @user.screct_pass = user_params[:password]
      if @user.save
        render json: @user
      else
        render json: 0
      end
  end

  def is_name_exist
     @user = User.where(:name => user_params[:user_attr]).first
      if @user.nil?
        render json: 0
      else
        render json: 1
      end
  end

  def invite_judge

  end
  
  private
  
  def user_params
      params.require(:user).permit(:name, :screct_pass, :invite_code, :password,:password_confirmation, :user_attr)
  end

end
