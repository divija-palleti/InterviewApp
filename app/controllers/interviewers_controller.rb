class InterviewersController < ApplicationController
    include Response
    include ExceptionHandler
    def new
        @interviewer = Interviewer.new
    end

    def index
        @interviewers = Interviewer.all
        json_response(@interviewers)
        
    end
  

    def create
        @interviewer = Interviewer.new(interviewer_params)
        
        # respond_to do |format|
          if @interviewer.save()
            render json: {
              :success => true,
            }
            # format.html { redirect_to interviewers_path, notice: 'Created ' }
            # format.json { render @interviewers }
          else
            render json: {
            :success => false,
            :errors => @interviewer.errors
          }
            # format.html { render :new }
            # format.json { render json: @interviewer.errors, status: :unprocessable_entity }
          end
        # end
        
    end

    def destroy
        Interviewer.find(params[:id]).destroy
        render json: {
              :success => true,
            }
        # redirect_to interviewers_path, notice: 'Deleted '
      end

    private

    def interviewer_params
      params.require(:interviewer).permit(:name, :email, :desc)
    end
end
