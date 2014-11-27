class Project < ActiveRecord::Base
	belongs_to :user
	has_many :stories
	validates :user_id, :title, presence: true

	
end
