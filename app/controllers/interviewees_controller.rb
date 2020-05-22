class IntervieweesController < ApplicationController

    def new
        @interviewee = Interviewee.new
    end

    def index
        @interviewees = Interviewee.all
        
    end
  

    def create
        @interviewee = Interviewee.new(interviewer_params)
        
        respond_to do |format|
          if @interviewee.save()
            format.html { redirect_to interviewees_path, notice: 'Created ' }
            format.json { render @intervieweees }
          else
            format.html { render :new }
            format.json { render json: @interviewee.errors, status: :unprocessable_entity }
          end
        end
        
    end

    def destroy
        Interviewee.find(params[:id]).destroy
        redirect_to interviewees_path, notice: 'Deleted '
      end

    private

    def interviewer_params
      params.require(:interviewee).permit(:name, :email, :resume)
    end
end
