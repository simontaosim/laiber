class UserSessionsController < ApplicationController
  def new
  	@user = User.new
  end
  def index

  end

  def show
    
  end
  def auth
  	
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
	  			respond_to do |format|
	  				format.html{ redirect_to user_sessions_success_info_path+"?info=success" }
	  			end
	  		else
	  			respond_to do |format|
  					format.html{ redirect_to user_sessions_success_info_path+"?info=密码错误" }
  				end	
	  		end
  		else
  			respond_to do |format|
  				format.html{ redirect_to user_sessions_success_info_path+"?info=failed" }
  			end
  		end  
  	
  end

  def destroy

  end


  def success_info
  	render json: session[:progress]
  end
   private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:name, :screct_pass, :invite_code, :password)
    end
end
