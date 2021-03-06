class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.text :description
      t.integer :author_id, null: false
      t.timestamps
    end
  end
end
