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

		def create
			@project = Project.new(
				user_id: params[:project][:user_id],
				title: params[:project][:title]
			)
			if @project.save
				render json: @project
			else
			end
		end

		private

	end
end
