class AddParticipantToInterview < ActiveRecord::Migration[6.0]
  def change
    add_column :interviews, :participant, :string
  end
end
