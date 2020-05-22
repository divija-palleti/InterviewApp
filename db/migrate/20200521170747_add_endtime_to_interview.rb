class AddEndtimeToInterview < ActiveRecord::Migration[6.0]
  def change
    add_column :interviews, :endtime, :time
  end
end
