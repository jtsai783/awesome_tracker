class StaticPageController < ApplicationController
	before_action :ensure_logged_in

	def index
		render :root
	end
end
