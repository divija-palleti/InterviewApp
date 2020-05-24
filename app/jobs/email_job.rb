# class EmailJob < ApplicationJob
#   queue_as :default

#   def perform(*args)
#     # Do something later
#     IntervieweeMailer.send_reminder(@interview).deliver_now
#   end
# end
