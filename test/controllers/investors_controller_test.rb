require 'test_helper'

class InvestorsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get reg" do
    get :reg
    assert_response :success
  end

  test "should get create" do
    get :create
    assert_response :success
  end

  test "should get ban" do
    get :ban
    assert_response :success
  end

  test "should get pass" do
    get :pass
    assert_response :success
  end

end
