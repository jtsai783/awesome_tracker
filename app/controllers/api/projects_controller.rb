module Api
	class ProjectsController < ApplicationController
		before_action :ensure_logged_in

		def index
			@projects = current_user.projects
			render json: @projects
		end

		def show
			@project = Project.find_by_id(params[:id])
			render :show
		end
	end
end
