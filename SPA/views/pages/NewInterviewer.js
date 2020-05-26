let NewInterviewer = {
    render : async () => {
       
        let view =  /*html*/`
        
        <h1> New Interviewer</h1>
        <div class="container">
            <form id="new_interviewer">
                <div class="form-group">
                  <label for="title">Name</label>
                  <input class="form-control" type="text" name="name" id="interviewer_name">
                  
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input class="form-control" type="email" name="email" id="interview_email">
                </div>
                <div class="form-group">
                  <label for="desc">Desc</label>
                  <input class="form-control" type="text name="desc" id="interview_desc">
                </div>
                
               
                <button type="submit" name="submit" class="btn btn-primary">Submit</button>
               
            </form>
                <div class="text-center">
                    <a href="/#/interviewers">
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

export default NewInterviewer;