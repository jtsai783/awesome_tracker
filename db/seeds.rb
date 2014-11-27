# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do	
	User.create(username: 'apple', password: 'apple2')
	Project.create(user_id: 1, title: "Burrito Finder")
	Project.create(user_id: 1, title: "Food Trucker")
	Project.create(user_id: 1, title: "Pied Piper")
	Story.create(
		project_id: 1,
		list: "icebox",
		title: "user wants to find a burrito",
		points: 1
	)
	Story.create(
		project_id: 1,
		list: "current",
		title: "make a burrito",
		points: 3
	)
	Story.create(
		project_id: 1,
		list: "current",
		title: "hide a burrito",
		points: 2
	)

end