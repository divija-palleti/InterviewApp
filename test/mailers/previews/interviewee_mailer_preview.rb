# Preview all emails at http://localhost:3000/rails/mailers/interviewee_mailer
class IntervieweeMailerPreview < ActionMailer::Preview
    def send_reminder
        IntervieweeMailer(interview: Interview.first).send_reminder.deliver_now
    end

end
