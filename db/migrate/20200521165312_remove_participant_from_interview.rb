class RemoveParticipantFromInterview < ActiveRecord::Migration[6.0]
  def change
    remove_column :interviews, :participant, :integer
  end
end
