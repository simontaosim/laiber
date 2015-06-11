class InvitationAdminController < ApplicationController
  layout 'invitation'
  before_action :authenticate_admin!
  def index
  	
  end

  def get_200_codes
  	for i in 1..200
	  	@invitation = Invitation.new
	  	i = @invitation.generate_code
	  	@invitation.save
  	end
  	@invitations = Invitation.desc(:created_at).limit(200)
  end

end
