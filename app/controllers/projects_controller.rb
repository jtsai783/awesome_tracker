module Api
	class ProjectsController < ApplicationController
		before_action :ensure_logged_in

		def index
			@projects = current_user.projects
			render json: @projects
		end

		def show
			@pproject = Project.find_by_id(params[:id])
			render json: 
		end
	end
end
