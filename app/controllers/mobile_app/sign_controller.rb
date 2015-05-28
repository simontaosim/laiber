class MobileApp::SignController
	use Rack::Cors do
		allow do
			origins '*', 'null'
			resource '*', :headers => :any, :methods => [:get, :post]
		end
	end
	skip_before_filter :verify_authenticity_token, only: [:signIn, :signOut, :autoSignIn]

	# 登陆
	# 参数：user[name] user[email] user[mobile] user[password]
	# 成功：返回{token:*}，即SignToken的id
	# 失败：密码错误返回0，用户名不存在返回1
	# TODO：删除冗余登陆token
	def signIn
		user = User.where(:name => paramsUser[:name]).first
		if user.nil?
			user = User.where(:email => paramsUser[:name]).first
		end
		if user.nil?
			user = User.where(:mobile => paramsUser[:name]).first
		end
		if user
			if user.screct_pass == paramsUser[:password]
				signToken = SignToken.new
				signToken.user = user
				signToken.save
				session[:signToken] = signToken.getId
				render json: signToken.getToken
			else
				# 密码错误
				render json: 0
			end
		else
			# 用户不存在
			render json: 1
		end  
	end

	# 自动登陆
	# 参数：token
	# 成功：返回0
	# 失败：返回1
	# TODO：删除冗余登陆token
	def autoSignIn
		signToken = SignToken.find(params[:token])
		if signToken
			session[:signToken] = signToken.getId
			render json: 0
		else
			render json: 1
		end
	end

	# 登出
	# 返回：0
	def signOut
		if session[:signToken] != nil
			signToken = SignToken.find(session[:signToken])
			signToken.destroy
			session[:signToken] = nil
		end
		render json: 0
	end

	private
	def paramsUser
		return params.require(:user).permit(:_id)
	end
end