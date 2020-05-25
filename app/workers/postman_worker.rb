class PostmanWorker
    include Sidekiq::Worker
   
    def perform(interview_id, time)
        # @interview = Interview.find(interview_id)
        puts time
        puts "time from postmman"
        
        ParticipantMailer.send_reminder(interview_id,time).deliver_now
        
    end
end