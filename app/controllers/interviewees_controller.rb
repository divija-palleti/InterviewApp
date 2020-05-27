class IntervieweesController < ApplicationController
    include Response
    include ExceptionHandler
    def new
        @interviewee = Interviewee.new
    end

    def index
        @interviewees = Interviewee.all 
        # interviewees = []
        # @interviewees.each do |i|
        #   interviewees.append({
        #   :id => i.id,
        #   :name => i.name,
         
        #   :email => i.email,
        #   :r_link => i.resume.url,

        # })
        # end
        
        
        # render json: {
        #   :interviewees => interviewees,
        # }
    end

  

    def create
        @interviewee = Interviewee.new(interviewer_params)

        # respond_to do |format|
          if @interviewee.save()
            render json: {
              :success => true,
            }
            # format.html { redirect_to interviewees_path, notice: 'Created ' }
            # format.json { render @intervieweees }
          else
            render json: {
            :success => false,
            :errors => @interviewee.errors
          }
            # format.html { render :new }
            # format.json { render json: @interviewee.errors, status: :unprocessable_entity }
          end
        # end
        
    end

    def destroy
        Interviewee.find(params[:id]).destroy
        # render json: {
        #   :success => true,
        # }
        redirect_to interviewees_path, notice: 'Deleted '
      end

    private

    def interviewer_params
      params.require(:interviewee).permit(:name, :email, :resume)
    end
end
