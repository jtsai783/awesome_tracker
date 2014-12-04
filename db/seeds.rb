Project.create!([
  {user_id: 1, title: "Awesome Tracker"},
  {user_id: 1, title: "Burrito Finder"},
  {user_id: 1, title: "Food Trucker"},
  {user_id: 1, title: "Pied Piper"},
  {user_id: 1, title: "Get a cool job"}
])
Story.create!([
  {project_id: 5, list: "done", importance: nil, title: "learn rails", type: nil, points: 3, order: 1},
  {project_id: 1, list: "icebox", importance: nil, title: "have actual sprints", type: nil, points: nil, order: 1},
  {project_id: 1, list: "current", importance: nil, title: "search for projects", type: nil, points: 3, order: 1},
  {project_id: 1, list: "done", importance: nil, title: "log in/out", type: nil, points: 3, order: 1},
  {project_id: 5, list: "icebox", importance: nil, title: "get paid", type: nil, points: 3, order: 2},
  {project_id: 5, list: "done", importance: nil, title: "learn javascript", type: nil, points: 3, order: 2},
  {project_id: 1, list: "done", importance: nil, title: "see all projects", type: nil, points: 2, order: 2},
  {project_id: 1, list: "current", importance: nil, title: "search for stories", type: nil, points: 3, order: 2},
  {project_id: 1, list: "backlog", importance: nil, title: "have a even better show page", type: nil, points: 3, order: 2},
  {project_id: 5, list: "current", importance: nil, title: "demo skills", type: nil, points: 3, order: 2},
  {project_id: 1, list: "done", importance: nil, title: "see the stories", type: nil, points: 2, order: 3},
  {project_id: 5, list: "done", importance: nil, title: "learn sql", type: nil, points: 3, order: 3},
  {project_id: 1, list: "done", importance: nil, title: "log in as guest", type: nil, points: 1, order: 4},
  {project_id: 5, list: "done", importance: nil, title: "learn css", type: nil, points: 3, order: 4},
  {project_id: 5, list: "done", importance: nil, title: "learn ruby", type: nil, points: 3, order: 5},
  {project_id: 1, list: "done", importance: nil, title: "make the login form pretty", type: nil, points: 2, order: 5},
  {project_id: 5, list: "done", importance: nil, title: "learn backbone", type: nil, points: 3, order: 6},
  {project_id: 1, list: "done", importance: nil, title: "make the header look pretty", type: nil, points: 1, order: 6},
  {project_id: 1, list: "done", importance: nil, title: "have css hover effects", type: nil, points: 1, order: 7},
  {project_id: 1, list: "done", importance: nil, title: "make the navbar look pretty", type: nil, points: 2, order: 8}
])
User.create!([
  {username: "apple", password_digest: "$2a$10$cI.MqTD5HrICkzV.00DAhOIRRq4YLq3D//A9O.rqbaDyQbf26vF5m", session_token: "mugUfryBsL1FwuWCNtGEvA"}
])
