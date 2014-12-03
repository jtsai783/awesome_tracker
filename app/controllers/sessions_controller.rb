class SessionsController < ApplicationController
	before_action :ensure_not_logged_in, except: [:destroy]
	before_action :set_cache_buster

	def index
		render :index
	end

	def new
		render :new
	end

	def create
		user = User.find_by_credential(
			user_params[:username],
			user_params[:password]
		)
		if user.nil?
			render :new
		else
			login_user!(user)
			redirect_to root_url
		end
	end

	def destroy
		logout_user!
		redirect_to root_url
	end

	private
	def user_params
		params.require(:user).permit(:username, :password)
	end
end
