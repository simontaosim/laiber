class GetTestController < ApplicationController
  def index
  	@invitation = Invitation.new
  	i = @invitation.generate_code
  	@invitation.save
  	render json: Invitation.limit(50)
  end
end
