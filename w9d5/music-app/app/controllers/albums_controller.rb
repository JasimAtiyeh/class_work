class AlbumsController < ApplicationController
  def new
    @album = Album.new
    render :new
  end

  def create
    @album = Album.new(album_params)

    if @album.save
      redirect_to album_url(@album.id)
    else
      flash.now[error].full_messages
      render :new
    end
  end

  def edit
    @album = Album.find(params[:id])

    if @band
      redirect_to band_url(@album.id)
    else
      flash.now[error].full_messages
      render :edit
    end
  end

  def update
  end

  def show
    @album = Album.find(params[:id])
  end

  def destroy
  end

  private

  def album_params
    params.require(:album).permit[:title, :year, :live, :band_id]
  end
end
