class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user.nil?
      render json: ["Invalid username and/or password"], status: 404
    else
      login!(@user)
      render "api/users/show"
    end
  end

  def destroy
    logout!
    render json: {message: "Logouted succesfully"}
  end
end
