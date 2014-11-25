Rails.application.routes.draw do
   root 'sessions#index'

   resources :users, only: [:new, :create]
   resources :sessions, only: [:new, :create, :destroy]
end
