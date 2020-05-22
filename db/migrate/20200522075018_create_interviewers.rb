class CreateInterviewers < ActiveRecord::Migration[6.0]
  def change
    create_table :interviewers do |t|
      t.string :name
      t.string :email
      t.string :desc

      t.timestamps
    end
  end
end
