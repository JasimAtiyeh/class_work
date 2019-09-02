class UsersController < ApplicationController
  def index 
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render :show
    else
      flash[:error]
      redirect_to new_user_url
    end
  end

  def show
    @user = User.find_by(id: params.id)
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
