class Interviewee < ApplicationRecord
    has_attached_file :resume
    validates_attachment :resume, content_type: { content_type: "application/pdf" }
    validates :name, :email, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
end
