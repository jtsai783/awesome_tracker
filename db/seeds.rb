Project.create!([
  {user_id: 1, title: "Burrito Finder"},
  {user_id: 1, title: "Food Trucker"},
  {user_id: 1, title: "Pied Piper"},
  {user_id: 1, title: "Minecraft"}
])
Story.create!([
  {project_id: 6, list: "icebox", importance: nil, title: "have fluid simulation", type: nil, points: 3, order: 1},
  {project_id: 6, list: "done", importance: nil, title: "break blocks", type: nil, points: 2, order: 1},
  {project_id: 6, list: "backlog", importance: nil, title: "day transitions", type: nil, points: 2, order: 2},
  {project_id: 6, list: "done", importance: nil, title: "grow crops", type: nil, points: 3, order: 2},
  {project_id: 6, list: "current", importance: nil, title: "ride horses", type: nil, points: 1, order: 2},
  {project_id: 6, list: "current", importance: nil, title: "have pets", type: nil, points: 2, order: 2},
  {project_id: 6, list: "done", importance: nil, title: "have different tools", type: nil, points: 2, order: 3}
])
User.create!([
  {username: "apple", password_digest: "$2a$10$cI.MqTD5HrICkzV.00DAhOIRRq4YLq3D//A9O.rqbaDyQbf26vF5m", session_token: "mPh_YkdQX7cMk9kn_LafsQ"}
])
