class MobileApp::SignController
	use Rack::Cors do
		allow do
			origins '*', 'null'
			resource '*', :headers => :any, :methods => [:get, :post]
		end
	end
	skip_before_filter :verify_authenticity_token, only: [:sign_in, :sign_out, :auto_sign_in]

	# 登陆
	# 参数：user[name] user[email] user[mobile] user[password]
	# 成功：返回token，即SignToken的id
	# 失败：密码错误返回0，用户名不存在返回1
	def sign_in
		user = User.where(:name => user_params[:name]).first
		if user.nil?
			user = User.where(:email => user_params[:name]).first
		end
		if user.nil?
			user = User.where(:mobile => user_params[:name]).first
		end
		if user
			if user.screct_pass == user_params[:password]
				tokens = SignToken.where(:user => user)
				

				user_session = UserSession.new
				user_session.user = user
				user_session.name = user.name
				user_session.save
				session[:mobile_app] = user_session
				render json: SignToken
			else
				# 密码错误
				render json: 0
			end
		else
			# 用户名不存在
			render json: 1
		end  
	end

	# 自动登陆
	# 参数：token
	# 成功：返回0
	# 失败：返回1
	def auto_sign_in
		user_session = UserSession.find(params[:token])
		if user_session
			session[:mobile_app] = user_session
			render json: 0
		else
			render json: 1
		end
	end

	
	def sign_out

	end
end