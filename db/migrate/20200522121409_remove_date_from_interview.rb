class RemoveDateFromInterview < ActiveRecord::Migration[6.0]
  def change
    remove_column :interviews, :date, :date
  end
end
