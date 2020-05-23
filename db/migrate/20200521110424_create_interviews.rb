class CreateInterviews < ActiveRecord::Migration[6.0]
  def change
    create_table :interviews do |t|
      t.string :title
      t.date :date
      t.string :desc
      t.time :start
      t.integer :interviewer
      t.integer :participant

      t.timestamps
    end
  end
end
