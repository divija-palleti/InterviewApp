class ParticipantMailer < ApplicationMailer

    def send_reminder(interview_id,time)
        # puts "time from mailer"
        # puts time
        @interview = Interview.find(interview_id)
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


    def update_mail(interview_id,time)
        # puts "time from mailer"
        # puts time
        @interview = Interview.find(interview_id)
        # @interview = interview
        # puts @interview.updated_at
        # puts "updated time"
        if(@interview.updated_at <= time)
            # puts "Yass"
            @interviewees = Interviewee.where("id in (?)", @interview.interviewee_ids)
            emails = []
            for i in @interviewees do 
            emails.append(i.email)
            end
        
            mail( to: emails, subject: "Interview Updated")
        else

        end
    end
end
