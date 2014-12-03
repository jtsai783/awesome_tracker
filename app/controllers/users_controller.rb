class UsersController < ApplicationController
	before_action :ensure_not_logged_in
	before_action :set_cache_buster

	def create
		@user = User.new(user_params)
		if @user.save
			login_user!(@user)
			redirect_to root_url
		else
			render :new
		end
	end

	def new 
		@user = User.new
		render :new
	end

	private
	def user_params
		params.require(:user).permit(:password, :username)
	end
end
