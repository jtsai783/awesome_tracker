module Api
	class StoriesController < ApplicationController
		def update
			@story = Story.find_by_id(params[:story][:id])
			@story.update_attributes(story_params)
			render json: @story
		end

		private
		def story_params
			params.require(:story).permit(:list, :importance, :title, :type, :points)
		end
	end
end