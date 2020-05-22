class RemoveInterviewerFromInterview < ActiveRecord::Migration[6.0]
  def change
    remove_column :interviews, :interviewer, :integer
  end
end
