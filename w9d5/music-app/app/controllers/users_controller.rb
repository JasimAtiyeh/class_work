class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def new
    @user = User.new
    render :new
  end
  
  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to user_url(@user.id)
    else
      @user.errors.full_messages
      render :new
    end
  end

  private
  
  def user_params
    params.require(:user).permit(:email, :password)
  end
end