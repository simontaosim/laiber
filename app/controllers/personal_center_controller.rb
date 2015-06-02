class PersonalCenterController < ApplicationController
  def index
  	@title = 'LAIBER——个人中心'
  	@user_session = UserSession.find(session[:progress].fetch("_id").fetch("$oid"))

  end

  def upload

  end
  
  def edit

  end
end
