class Project < ActiveRecord::Base
	belongs_to :user
	has_many :stories
	validates :user_id, :title, presence: true

	def total_points
		done_stories = self.stories.where("list = 'done'")
		points_sum = 0;
		done_stories.each do |story|
			points_sum = points_sum + story.points
		end
		points_sum
	end

	def average_vel
		num_weeks = (Time.zone.now - self.created_at) / 1.day / 7
		(total_points / num_weeks).round
	end

	def current_load
		current_stories = self.stories.where("list = 'current'")
		points_sum = 0;
		current_stories.each do |story|
			points_sum = points_sum + story.points
		end
		points_sum
	end
end
