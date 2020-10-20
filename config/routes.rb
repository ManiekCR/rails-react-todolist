Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :tasks, only: [:index, :create, :update, :destroy]
    end
  end
end


