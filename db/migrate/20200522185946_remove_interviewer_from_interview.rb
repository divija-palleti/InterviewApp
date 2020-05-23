class RemoveInterviewerFromInterview < ActiveRecord::Migration[6.0]
  def change
    remove_column :interviews, :interviewer, :string
  end
end
