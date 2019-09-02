require 'test_helper'

class AlbumsControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get :new" do
    get albums_controller_:new_url
    assert_response :success
  end

  test "should get :create" do
    get albums_controller_:create_url
    assert_response :success
  end

  test "should get :edit" do
    get albums_controller_:edit_url
    assert_response :success
  end

  test "should get :update" do
    get albums_controller_:update_url
    assert_response :success
  end

  test "should get :show" do
    get albums_controller_:show_url
    assert_response :success
  end

  test "should get :destroy" do
    get albums_controller_:destroy_url
    assert_response :success
  end

end
