class Story < ActiveRecord::Base
	belongs_to :project
	after_initialize :ensure_order, :ensure_list

	private
	def ensure_order
		sql = <<-sql
			SELECT
				MAX(stories.order) AS last_order
			FROM
				stories
			WHERE
				stories.list = '#{self.list}'
		sql
		record = ActiveRecord::Base.connection.execute(sql)
		self.order ||= record[0]['last_order'].to_i + 1
	end

	def ensure_list
		self.list ||= 'icebox'
	end
end
