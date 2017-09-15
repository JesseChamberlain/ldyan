Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  get '/about', to: 'home#show'
  get '/songs', to: 'home#index'
  get '/songs/:id', to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :songs, only: [:index, :show, :create, :update, :destroy] do
        resources :blocks, only: [:index]
      end
      resources :blocks, only: [:create, :update, :destroy]
    end
  end
end
