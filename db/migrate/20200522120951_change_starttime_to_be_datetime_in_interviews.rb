class ChangeStarttimeToBeDatetimeInInterviews < ActiveRecord::Migration[6.0]
  def change
    change_column :interviews, :starttime, :datetime
  end
end
