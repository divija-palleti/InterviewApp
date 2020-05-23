class AddAttachmentResumeToInterviewees < ActiveRecord::Migration[6.0]
  def self.up
    change_table :interviewees do |t|
      t.attachment :resume
    end
  end

  def self.down
    remove_attachment :interviewees, :resume
  end
end
