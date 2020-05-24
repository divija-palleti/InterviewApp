class ParticipantMailer < ApplicationMailer

    def send_reminder(interview,time)
        # puts "time from mailer"
        # puts time
        @interview = interview
        # puts @interview.updated_at
        # puts "updated time"
        if(@interview.updated_at <= time)
            # puts "Yass"
            @interviewees = Interviewee.where("id in (?)", @interview.interviewee_ids)
            emails = []
            for i in @interviewees do 
            emails.append(i.email)
            end
        
            mail( to: emails, subject: "Reminder mail for the interview")
        else

        end
    end
end
