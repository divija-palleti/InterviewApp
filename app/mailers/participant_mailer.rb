class ParticipantMailer < ApplicationMailer

    def send_reminder(interview_id,time)
        @interview = Interview.find(interview_id)
        if(@interview.updated_at < time)
            
            @interviewees = Interviewee.where(id: @interview.interviewee_ids)
            # @interviewees = Interviewee.where("id in (?)", @interview.interviewee_ids)
            emails = []
            for interviewee in @interviewees do 
            emails.append(interviewee.email)
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
            for interviewee in @interviewees do 
            emails.append(interviewee.email)
            end
        
            mail( to: emails, subject: "Interview Updated")
        else

        end
    end
end
