Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :songs, only: [:index, :show] do
        resources :blocks, only: [:index]
      end
    end
  end
end
