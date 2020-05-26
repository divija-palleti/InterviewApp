let NewInterviewee = {
    render : async () => {
       
        let view =  /*html*/`
        
        <h1> New Interviewer</h1>
        <div class="container">
            <form id="new_interviewee">
                <div class="form-group">
                  <label for="title">Name</label>
                  <input class="form-control" type="text" name="name" id="interviewee_name">
                  
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input class="form-control" type="email" name="email" id="interviewee_email">
                </div>
                <div class="form-group">
                  <label for="resume">Resume(pdf only)</label>
                  <input class="form-control" type="file" name="desc" id="interviewee_resume">
                </div>
                
               
                <button type="submit" name="submit" class="btn btn-primary">Submit</button>
               
            </form>
                <div class="text-center">
                    <a href="/#/interviewees">
                    Cancel
                    </a>
                </div>
             
        </div>
            
        `
        return view
    }
    , after_render: async () => {
    }

}

export default NewInterviewee;