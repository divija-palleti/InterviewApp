class AddStarttimeToInterview < ActiveRecord::Migration[6.0]
  def change
    add_column :interviews, :starttime, :time
  end
end
