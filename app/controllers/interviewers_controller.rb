class InterviewersController < ApplicationController
    def new
        @interviewer = Interviewer.new
    end

    def index
        @interviewers = Interviewer.all
        
    end
  

    def create
        @interviewer = Interviewer.new(interviewer_params)
        
        respond_to do |format|
          if @interviewer.save()
            format.html { redirect_to interviewers_path, notice: 'Created ' }
            format.json { render @interviewers }
          else
            format.html { render :new }
            format.json { render json: @interviewer.errors, status: :unprocessable_entity }
          end
        end
        
    end

    def destroy
        Interviewer.find(params[:id]).destroy
        redirect_to interviewers_path, notice: 'Deleted '
      end

    private

    def interviewer_params
      params.require(:interviewer).permit(:name, :email, :desc)
    end
end
