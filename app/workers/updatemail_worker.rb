class UpdatemailWorker
    include Sidekiq::Worker
   
    def perform(interview_id, time)
        # @interview = Interview.find(interview_id)
        ParticipantMailer.update_mail(interview_id,time).deliver_later
    end
end