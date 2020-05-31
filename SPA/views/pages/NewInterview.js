import Redirect        from '../../services/Redirect.js'
import getInterviewersList        from '../../services/getInterviewersList.js'
import getIntervieweesList        from '../../services/getIntervieweesList.js'

let postInterview = async (interview) => {
    console.log(JSON.stringify(interview))


    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(interview),
      };
      try {
        const response = await fetch(`http://localhost:3000/interviews`, options);
        const json = await response.json();
     
        if(json.success){
         alert("Interview Created");
           Redirect('/')
        }
        else{
            var x;
            var obj = json.errors;
         alert("Interview not Created");
         for (x in obj) {
            alert(`${x} - ${obj[x]}`);
          }

   
        }
      } catch (err) {
        console.log(err);
      }

}

let NewInterviews = {

    render : async () => {
       
        let interviewers = await getInterviewersList()
        let interviewees = await getIntervieweesList()
     
        let view =  /*html*/`
        
        <h1> New Interview</h1>
        <div class="container">
            <form id="new_interview" >
                <div class="form-group">
                  <label for="title">Title</label>
                  <input class="form-control" type="text" name="title" id="interview_title" required>
                  
                </div>
                <div class="form-group">
                  <label for="Desc">Desc</label>
                  <input class="form-control" type="text" name="desc" id="interview_desc">
                </div>
                <div class="form-group">
                    <label for="starttime">Start time</label>
                    <input type="datetime-local" name="starttime" class="form-control" id="interview_start" required>
                </div>
                <div class="form-group">
                    <label for="endtime">End time</label>
                    <input type="datetime-local" name="endtime" class="form-control" id="interview_end" required>
                </div>
                <div class="form-group">
                    <label for="interviewer">Interviewer</label>
                    <select id="interview_interviewer" name="interviewer_id">
                            ${ interviewers.map(interviewer => 
                                /*html*/`
                                
                                <option value=${interviewer.id}>${interviewer.email}</option>
                                
                                `
                                )
                            }
                        
                    </select>
                </div>
                <div class="form-group">
                    <label for="interviewee">Interviewee</label>
                    ${ interviewees.interviewees.map(intervieweee => 
                        /*html*/`
                        <input type="checkbox" id=${intervieweee.id} name="interviewee_id"  value=${intervieweee.id} >
                        <label for=${intervieweee.id}> ${intervieweee.email}</label><br>
                        
                        `
                        )
                    }
                   
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

        const form = document.getElementById('new_interview');

        form.addEventListener('submit', event => {
            event.preventDefault();
           let interview = {};
           let interviewee_ids = [];
            
            Object.keys(form.elements).forEach(key => {
                let element = form.elements[key];
                if (element.type !== "submit") {
                    if(element.name == "interviewee_id")
                    {
                        if(element.checked == true)
                        {
                        interviewee_ids.push(element.value);
                        }
                    }
                    else

                    {interview[element.name] = element.value;}
                }
                interview["interviewee_ids"] = interviewee_ids
              });
          
            let x =postInterview(interview);

        
          

          })
    }

}

export default NewInterviews;