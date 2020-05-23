class AddInterviewerToInterview < ActiveRecord::Migration[6.0]
  def change
    add_reference :interviews, :interviewer, null: false, foreign_key: true
  end
end
