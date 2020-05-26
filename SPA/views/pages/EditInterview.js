import Utils        from './../../services/Utils.js'

let EditInterview = {
    render : async () => {

        let request = Utils.parseRequestURL()
        
        let view =  /*html*/`
        
        <h1> Edit Interview : ${request.id}</h1>
        <div class="container">
            <form id="new_interview">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input class="form-control" type="text" name="title" id="interview_title">
                  
                </div>
                <div class="form-group">
                  <label for="Desc">Desc</label>
                  <input class="form-control" type="text" name="desc" id="interview_desc">
                </div>
                <div class="form-group">
                    <label for="starttime">Start time</label>
                    <input type="datetime-local" name="starttime" class="form-control" id="interview_start">
                </div>
                <div class="form-group">
                    <label for="endtime">End time</label>
                    <input type="datetime-local" name="endtime" class="form-control" id="interview_end">
                </div>
                <div class="form-group">
                    <label for="interviewer">Interviewer</label>
                    <select id="interview_interviewer" name="interviewer_id">
                        <option value="Interviewer1">Interviewer1</option>
                        <option value="Interviewer2">Interviewer2</option>
                        <option value="Interviewer3">Interviewer3</option>
                        
                    </select>
                </div>
                <div class="form-group">
                    <label for="interviewee">Interviewee</label>
                    <input type="checkbox" id="interviewee1" name="interviewee_id" value="Interviewee1">
                    <input type="checkbox" id="interviewee2" name="interviewee_id" value="Interviewee2">
                    <input type="checkbox" id="interviewee2" name="interviewee_id" value="Interviewee2">
                </div>
        
                <button type="submit" name="submit" class="btn btn-primary">Submit</button>
               
            </form>
                <div class="text-center">
                    <a href="/#/">
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

export default EditInterview;