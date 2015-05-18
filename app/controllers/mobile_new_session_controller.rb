class MobileNewSessionController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: [:create]

  use Rack::Cors do
  	allow do
    # put real origins here
  	  origins '*', 'null'
    # and configure real resources here
   	 resource '*', :headers => :any, :methods => [:get, :post]
  	end
  end

  def create
  	@user = User.where(:name => user_params[:name]).first
    	if @user.nil?
    		@user = User.where(:email => user_params[:name]).first
    	end
    	if @user.nil?
    		@user = User.where(:mobile => user_params[:name]).first
    	end
  		if @user
  			@user = @user.auth_pass(user_params[:password])
        
  			if @user
          @user_session = UserSession.new
          @user_session.user = @user
          @user_session.name = @user.name
          @user_session.save
          session[:progress] = @user_session
	  			render json: @user
	  		else
	  			render json: 0
	  		end
  		else
  			render json: 1
  		end  
  end

  def destory
  end

private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :screct_pass, :password)
    end
end
