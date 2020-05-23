class DropInterviewParticipantTable < ActiveRecord::Migration[6.0]
  def change
    def up
      drop_table :interview_participants
    end
  
    def down
      fail ActiveRecord::IrreversibleMigration
    end
  end
end
