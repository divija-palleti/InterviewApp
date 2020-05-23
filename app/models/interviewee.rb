class Interviewee < ApplicationRecord
    has_and_belongs_to_many :interviews
    has_many :interview_participant, dependent: :destroy
    has_attached_file :resume
    validates_attachment :resume, content_type: { content_type: "application/pdf" }
    validates :name, :email, :resume, presence: true
    validates_uniqueness_of :email
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
end
