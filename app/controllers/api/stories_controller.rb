module Api
	class StoriesController < ApplicationController
		def update
			@story = Story.find(params[:id])
			@story.update(story_params)
			render json: @story
		end

		def create
			@story = Story.new(story_params)
			if @story.save
				render json: @story
			else
			end
		end

		def destroy
			@story = Story.find_by_id(params[:id])
			if @story.destroy
				render json: @story
			else
			end
		end

		private
		def story_params
			params.require(:story).permit(:list, :importance, :title, :type, :points, :project_id, :order)
		end
	end
end