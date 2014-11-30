json.extract! @project, :id, :user_id, :created_at, :updated_at

json.stories @project.stories, :id, :project_id, :list, :importance, :title, :type, :points, :created_at, :updated_at