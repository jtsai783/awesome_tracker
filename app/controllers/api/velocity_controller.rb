module Api
	class VelocityController < ApplicationController
		def show
			@project = Project.find_by_id(params[:id])
			render :show
		end
	end
end
