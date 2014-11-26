Rails.application.routes.draw do
	root 'static_index_page#index'

	resources :users, only: [:new, :create]
	resource :session, only: [:new, :create, :destroy]

	namespace :api, defaults: {format: :json} do
		resources :projects	
	end
end
