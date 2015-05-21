class UserSessionsController < ApplicationController
  def new
  	@user = User.new
  end
  def index

  end

  def show

  end

  def user_exist
    #根据用户名，用户邮箱，用户手机号检测用户是否存在
     @user = User.where(:name => user_params[:user_attr]).first
      if @user.nil?
        @user = User.where(:email => user_params[:user_attr]).first
      end
      if @user.nil?
        @user = User.where(:mobile => user_params[:user_attr]).first
      end
      if @user
        render json: 1
      else
        render json: 0
      end
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
	  				format.html{ redirect_to root_url }
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
    @user_session = UserSession.find(params[:id])
    session[:progress] = nil
    if @user_session.destroy

      redirect_to root_url, notice: "您已经退出！"
    end
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
      params.require(:user).permit(:name, :screct_pass, :invite_code, :password, :user_attr)
    end
end
