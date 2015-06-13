class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  layout 'foundation_view.html.erb'
  # GET /users
  # GET /users.json
  def index
    @users = User.all
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)
    @user.screct_pass = @user.md5(user_params[:password].to_s)
    @invite_code = Invitation.where(code: @user.invite_code).first
     if @invite_code.nil?
      if params[:page] == 'foundation'
          redirect_to user_active_reg_path, notice: '邀请码不正确'.html_safe()
          return nil
      else
        redirect_to new_user_session_path, notice: '邀请码不正确！'
        return nil
      end
       
     else
       @invite_code.destroy
     end
    respond_to do |format|
      if @user.save
        if params[:page]=='foundation'
          format.html { redirect_to user_active_login_path, notice:'注册成功，请登录' }
          format.json { render :show, status: :created, location: @user }
        else
          format.html { redirect_to new_user_session_path, notice:'注册成功，请登录' }
          format.json { render :show, status: :created, location: @user }
        end
        
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  
  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
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
