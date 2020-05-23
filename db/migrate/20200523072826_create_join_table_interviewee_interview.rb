class CreateJoinTableIntervieweeInterview < ActiveRecord::Migration[6.0]
  def change
    create_join_table :interviewees, :interviews do |t|
      # t.index [:interviewee_id, :interview_id]
      # t.index [:interview_id, :interviewee_id]
    end
  end
end
