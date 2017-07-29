Rails.application.routes.draw do
  root 'songs#index'
  resources :songs, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :songs do
        resources :blocks
      end
    end
  end
end
