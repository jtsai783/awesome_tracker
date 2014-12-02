class Story < ActiveRecord::Base
	belongs_to :project
	validates :title, presence: true
	after_initialize :ensure_list, :ensure_order
	default_scope do
		order('stories.order')
	end

	private
	def ensure_order
		if self.order == nil
			sql = <<-sql
			SELECT
				MAX(stories.order) AS last_order
			FROM
				stories
			WHERE
				stories.list = '#{self.list}'
			sql
			record = ActiveRecord::Base.connection.execute(sql)
			self.order = record[0]['last_order'].to_i + 1
		end
	end

	def ensure_list
		self.list ||= 'icebox'
	end
end
