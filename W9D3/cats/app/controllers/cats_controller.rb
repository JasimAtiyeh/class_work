class CatsController < ApplicationController

    def index
        @cats = Cat.all 
        render :index
    end

    def show
      @cat = Cat.find(params[:id])
      
      if @cat
        render :show
      else
        redirect_to cats_url
      end
    end

    def edit
      @cat = Cat.find(params[:id])
      render :edit
    end

    def new
      render :new
    end

    def create
      @cat = Cat.new(cat_params)

      if @cat.save
        redirect_to cat_url(@cat)
      else
        render :new
      end
    end

    private

    def cat_params
      params.require(:cat).permit(:name, :birth_date, :color, :sex, :description)
    end

end
