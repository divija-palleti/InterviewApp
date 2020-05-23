class CreateIntervieweesInterviews < ActiveRecord::Migration[6.0]
  def change
    create_table :interviewees_interviews do |t|
      t.references :interview, null: false, foreign_key: true
      t.references :interviewee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
