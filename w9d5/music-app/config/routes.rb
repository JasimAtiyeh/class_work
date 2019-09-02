Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:create, :new, :show, :index]

  resource :session, only: [:create, :new, :destroy]

  resources :albums, only: [:create, :edit, :update, :destroy, :show]

  resources :bands do
    resources :albums, only: :new
  end
end
