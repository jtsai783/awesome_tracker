class Project < ActiveRecord::Base
	has_one :user
	validates :user_id, :title, presence: true

	
end
