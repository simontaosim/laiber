class UserActiveController < ApplicationController
layout 'foundation_view'
  def login
  	@user = User.new
  end

  def logout
  end

  def reg
  	@user = User.new
  end
end
