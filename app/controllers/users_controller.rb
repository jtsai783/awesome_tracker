class UsersController < ApplicationController
	def create
		@user = User.new(user_params)
		if @user.save
		else
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
