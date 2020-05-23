class RemoveParticipantFromInterview < ActiveRecord::Migration[6.0]
  def change
    remove_column :interviews, :partcipant, :string
  end
end
