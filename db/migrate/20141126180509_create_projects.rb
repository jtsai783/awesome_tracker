class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
    	t.integer :user_id, null: false
    	t.string :title, null: false

      t.timestamps
    end

    add_index(:projects, :title)
  end
end
