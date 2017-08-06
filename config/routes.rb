Rails.application.routes.draw do
  root 'home#index'
  get '/songs', to: 'home#index'
  get '/songs/:id', to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :songs, only: [:index, :show, :update] do
        resources :blocks, only: [:index]
      end
      resources :blocks, only: [:create, :update, :destroy]
    end
  end
end
