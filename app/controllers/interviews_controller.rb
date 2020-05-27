class InterviewsController < ApplicationController
  include Response
  include ExceptionHandler

  
    def index
      @interviews = Interview.all

      interviews = []
      @interviews.each do |interview|
        participants = []
        interview.interviewees.each do |i|
          participants.append(
            i.email
          )
        end
        interviews.append({
          :id => interview.id,
          :title => interview.title,
          :start => interview.starttime,
          :end => interview.endtime,
          :interviewer_email => interview.interviewer_email,

         
          :participants => participants,
        })
      end
      render json: {
       
        :interviews => interviews,
      }
      
    end

    def new
      @interviewers = Interviewer.all
      @interview = Interview.new
    end

    def create
      @interviewers = Interviewer.all
      @interview = Interview.new(interview_params)
      
      # respond_to do |format|
        if @interview.save()
          
          # format.html { redirect_to @interview, notice: 'Created ' }
          # format.json { render @interviews }    
          render json: {
            :success => true,
          }
        else
         
          render json: {
            :success => false,
            :errors => @interview.errors
          }
          # format.html { render :edit }
          # format.json { render json: @interview.errors, status: :unprocessable_entity }
        end
      
      
    end

    def show
      @interview = Interview.find(params[:id])
      # interview = {}
      participants = []
      @interview.interviewees.each do |i|
        participants.append(
          i.id
        )
      end
      #  interview[id] = @interview.title
        render json: {
       
        :interview => @interview,
        :participants => participants
        }
    end

    def update
      @interview = Interview.find(params[:id])
      # respond_to do |format|
        if @interview.update(interview_params)
          # format.html { redirect_to @interview, notice: 'Updated' }
          # format.json { render @interviews }
          render json: {
            :success => true,
          }
        else
          # format.html { render :edit }
          # format.json { render json: @interview.errors, status: :unprocessable_entity }
          render json: {
            :success => false,
            :errors => @interview.errors
          }
        end
      # end
      
    end

    def destroy
      Interview.find(params[:id]).destroy
      # redirect_to root_path
      render json: {
        :success => true,
      }
    end

    def edit
      @interview = Interview.find(params[:id])
      @interviewers = Interviewer.all  
    end


    private

    def interview_params
      params.require(:interview).permit( :title, :desc, :starttime, :endtime, :interviewer_id, interviewee_ids: [])
    end
end
