class Interviewer < ApplicationRecord
    validates :name, :email, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates_uniqueness_of :email
end
