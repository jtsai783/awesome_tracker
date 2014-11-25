class StaticIndexPageController < ApplicationController
	before_action :ensure_logged_in

	def index
		render :index
	end
end
