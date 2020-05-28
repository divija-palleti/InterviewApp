class Interview < ApplicationRecord
    
    belongs_to :interviewer
    has_and_belongs_to_many :interviewees
    delegate :name, :email, to: :interviewer, prefix: true
    validates :title, presence: true
    validate :started_in_the_past
    validate :end_must_be_after_start
    validate :is_busy
    after_create :reminder_mail 
    after_update :reminder_mail 
    after_update :update_mail

    # puts starttime_changed?
    # puts "start time changed"

    def reminder_mail
        PostmanWorker.perform_at((starttime - Time.now.utc - 30.minutes).seconds.from_now, id, Time.now.utc+1.second)
        # PostmanWorker.perform_at(10.seconds.from_now, id, Time.now.utc+1.second)
        # ParticipantMailer.send_reminder(id, Time.now.utc).deliver_later
       
    end

    def update_mail
                UpdatemailWorker.perform_async( id, Time.now.utc+1.second )
    end
   

    private

    def is_busy

        if(id)
            # Interview.where(id: id).each do |w|
            #     # do stuff
            #     puts w
            #     puts "id"
            #   end
            # # check_id = Interview.where(id: id)
            # # puts check_id
            # # puts "id"
            # # check_i_id = Interview.where(interviewer_id: interviewer_id) 
            # # check_time =
            
            i_busy = Interview.where("((id != ?) AND (interviewer_id = ?) AND ((starttime BETWEEN ? AND ? ) OR (starttime < ? AND endtime > ? ) OR (endtime BETWEEN ? AND ?)) )",id,interviewer_id,starttime,endtime,starttime,endtime,starttime,endtime)
        else
            
            i_busy = Interview.where("((interviewer_id = ?) AND ((starttime BETWEEN ? AND ? ) OR (starttime < ? AND endtime > ? ) OR (endtime BETWEEN ? AND ?)) )",interviewer_id,starttime,endtime,starttime,endtime,starttime,endtime)
        end
        
        if i_busy.exists?
            
            errors.add(:interviewer_id, ' is busy - Select diff time')
        end
        
    end

    def started_in_the_past
        if starttime < (DateTime.now)
            errors.add(:starttime, "Select the proper Start time")
        end
    end


    def end_must_be_after_start
        if starttime >= endtime
            errors.add(:endtime, "must be after start time")
        end
    end


end
