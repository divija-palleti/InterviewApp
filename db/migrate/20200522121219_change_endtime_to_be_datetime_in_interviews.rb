class ChangeEndtimeToBeDatetimeInInterviews < ActiveRecord::Migration[6.0]
  def change
    change_column :interviews, :endtime, :datetime
  end
end
