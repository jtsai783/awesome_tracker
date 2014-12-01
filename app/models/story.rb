class Story < ActiveRecord::Base
	belongs_to :project
	after_initialize :ensure_order

	private
	def ensure_order
		self.order ||= Story.maximum('order') + 1
	end
end
