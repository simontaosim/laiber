require 'test_helper'

class UserMobileControllerTest < ActionController::TestCase
  test "should get create" do
    get :create
    assert_response :success
  end

  test "should get is_exist" do
    get :is_exist
    assert_response :success
  end

  test "should get invite_judge" do
    get :invite_judge
    assert_response :success
  end

end
