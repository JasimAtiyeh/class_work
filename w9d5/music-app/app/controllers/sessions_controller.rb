class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(user_params[:email], user_params[:password])

    if @user
      log_in_user!(@user)
      redirect_to user_url(@user.id)
    else
      user.errors.full_messages
      render :new
    end
  end

  def destroy
    @user.reset_session_token!
    session[:session_token] = nil
  end

  private
  
  def user_params
    params.require(:user).permit(:email, :password)
  end
end