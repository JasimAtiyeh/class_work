class BandsController < ApplicationController
  def index
    @bands = Band.all
  end

  def create
    @band = Band.new(band_params)

    if @band.save
      redirect_to band_url(@band.id)
    else
      @band.errors.full_messages
      render :new
    end
  end

  def new
    @band = Band.new
    render :new
  end

  def edit
    @band = Band.find(params[:id])

    if @band
      redirect_to band_url(@band.id)
    else
      @band.errors.full_messages
      render :edit
    end
  end

  def show
    @band = Band.find(params[:id])
  end

  def update
  end

  def destroy
  end

  private
  
  def band_params
    params.require(:band).permit(:name)
  end
end
