class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
    	t.integer :project_id
    	t.string :list
    	t.integer :importance
    	t.string :title
    	t.string :type
    	t.integer :points

      t.timestamps
    end
  end
end
