class Interview < ApplicationRecord
    validates :title, presence: true
    validate :started_in_the_past
    validate :end_must_be_after_start
    validate :interviewer_is_busy
    validate :participant_is_busy
    validates :interviewer, :participant, format: { with: URI::MailTo::EMAIL_REGEXP } 

    private

    def interviewer_is_busy

        i_busy = Interview.where("((interviewer = ?) AND ((starttime BETWEEN ? AND ? ) OR (starttime < ? AND endtime > ? ) OR (endtime BETWEEN ? AND ?)) )", interviewer,starttime,endtime,starttime,endtime,starttime,endtime)
        if i_busy.exists?
          errors.add(:interviewer, 'Interviewer is busy - Select diff time')
        end
        
    end

    def participant_is_busy

        p_busy = Interview.where("((participant = ?) AND ((starttime BETWEEN ? AND ? ) OR (starttime < ? AND endtime > ? ) OR (endtime BETWEEN ? AND ?)) )", participant,starttime,endtime,starttime,endtime,starttime,endtime)
       
        if p_busy.exists?
          errors.add(:participant, 'Interviewee has another interview during this time - Select diff time')
        end
        
    end

    def participants_should_be_different
        if interviewer == participant
            errors.add(:participant, 'Interviewer cannot be Interviewee')
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
