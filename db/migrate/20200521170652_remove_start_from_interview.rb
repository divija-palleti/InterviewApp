class RemoveStartFromInterview < ActiveRecord::Migration[6.0]
  def change
    remove_column :interviews, :start, :time
  end
end
