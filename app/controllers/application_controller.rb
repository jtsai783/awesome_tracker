class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  private
  def current_user
  	return nil unless session[:session_token]
  	@current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
  	!current_user.nil?
  end

  def login_user!(user)
  	session[:session_token] = user.reset_session_token!
  end

  def logout_user!
  	current_user.reset_session_token!
  	session[:session_token] = nil
  end

  def ensure_logged_in
  	redirect_to new_session_url if current_user.nil?
  end

  def ensure_not_logged_in
    redirect_to root_url if current_user
  end

  def set_cache_buster
    response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "Fri, 01 Jan 1990 00:00:00 GMT"
  end
end
