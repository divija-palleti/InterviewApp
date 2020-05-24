class InterviewsController < ApplicationController

  
    def index
      @interviews = Interview.all
    end

    def new
      @interviewers = Interviewer.all
      @interview = Interview.new
    end

    def create
      @interviewers = Interviewer.all
      @interview = Interview.new(interview_params)

      respond_to do |format|
        if @interview.save()
          
          format.html { redirect_to @interview, notice: 'Created ' }
          format.json { render @interviews }    
        else
          format.html { render :edit }
          format.json { render json: @interview.errors, status: :unprocessable_entity }
        end
      end
      
    end

    def show
      @interview = Interview.find(params[:id])
    end

    def update
      @interview = Interview.find(params[:id])
      respond_to do |format|
        if @interview.update(interview_params)
          format.html { redirect_to @interview, notice: 'Updated' }
          format.json { render @interviews }
        else
          format.html { render :edit }
          format.json { render json: @interview.errors, status: :unprocessable_entity }
        end
      end
      
    end

    def destroy
      Interview.find(params[:id]).destroy
      redirect_to root_path
    end

    def edit
      @interview = Interview.find(params[:id])
      @interviewers = Interviewer.all  
    end


    private

    def interview_params
      params.require(:interview).permit(:id, :title, :date, :desc, :starttime, :endtime, :interviewer_id, interviewee_ids: [])
    end
end
