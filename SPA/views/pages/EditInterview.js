import Utils        from './../../services/Utils.js'
import Redirect        from '../../services/Redirect.js'


let patchInterview = async (interview) => {
    console.log(JSON.stringify(interview))


    const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(interview),
      };
      try {
        const response = await fetch(`http://localhost:3000/interviews/`+interview.id, options);
        const json = await response.json();
  
        if(json.success){
         alert("Interview Updated");
           Redirect('/')
        }
        else{
            var x;
            var obj = json.errors;
            console.log(obj)

         alert("Interview not Updated");
         for (x in obj) {
            alert(`${x} - ${obj[x]}`);
          }

   
        }
      } catch (err) {
        console.log(err);
      }

}


let selectParticipant =  async (participants,interviewees) =>{
    let x='';
    const id = interviewees.interviewees.map(interviewee => interviewee.id);
    const email = interviewees.interviewees.map(interviewee => interviewee.email);
    for( var i =0; i< id.length;i++)
    {
        var flag=0;
        for(var j=0;j< participants.length;j++)
        {
            if(participants[i]==id[i])
            {
                flag=1;
            }
        }
        
        if(flag)
        {
            x+=  `<input type="checkbox" id=${id[i]} name="interviewee_id"  value=${id[i]} checked >
                  <label for=${id[i]}> ${email[i]}</label><br>`
        }
        else{

            x+=  `<input type="checkbox" id=${id[i]} name="interviewee_id"  value=${id[i]} >
                  <label for=${id[i]}> ${email[i]}</label><br>`

        }
    }

    return x;

}

let selectInterviewer = async (id1,interviewers) => {
    let x='';
    
    const id = interviewers.map(interviewer => interviewer.id);
    const email = interviewers.map(interviewer => interviewer.email);
        
        var i;
    for(i =0; i< id.length;i++)
    {
    
        if(id1==id[i])
        {
            x+=  `<option selected="selected" value=${id[i]}>${email[i]}</option>`
        }
        else{

            x+= `<option  value=${id[i]}>${email[i]}</option>`
        }
    }
 

    return x
    

}

let getInterviewersList = async () => {
    console.log("enter")
  
    const options = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        
        }
    };
    try {
        console.log("enter1")
    
        const response = await fetch(`http://localhost:3000/interviewers/`, options)
        console.log("enter2")
        const json = await response.json();
        
        console.log(json)
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}


let getIntervieweesList = async () => {
    console.log("enter")
  
    const options = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        
        }
    };
    try {
        const response = await fetch(`http://localhost:3000/interviewees/`, options)
        const json = await response.json();
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
}


let getInterview = async (id) => {
    
    const options = {
       method: 'GET',
       headers: {
        'Content-Type': 'application/json',
        // 'X-CSRF-Token': Rails.csrfToken()
       }
   };
   try {
    
       const response = await fetch(`http://localhost:3000/interviews/${id}`, options)
       const json = await response.json();
       console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
  
  }

let EditInterview = {
    render : async () => {

        let request = Utils.parseRequestURL()
        let id = request.id
        let interview_get = await getInterview(id)
       
        var start = new Date(interview_get.interview.starttime)
        var end = new Date(interview_get.interview.endtime)
       
        let interviewers = await getInterviewersList()
        let interviewees = await getIntervieweesList()
        let select_interviewers = await  selectInterviewer(interview_get.interview.interviewer_id,interviewers)
        let select_participants = await  selectParticipant(interview_get.participants,interviewees) 
       
        
        let view =  /*html*/`
        
        <h1> Edit Interview : ${id}</h1>
        <div class="container">
            <form id="create_interview">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input class="form-control" type="text" name="title" id="interview_title" value=${interview_get.interview.title} required>
                  
                </div>
                <div class="form-group">
                  <label for="Desc">Desc</label>
                  <input class="form-control" type="text" name="desc" id="interview_desc"  value=${interview_get.interview.desc}>
                </div>
                <div class="form-group">
                    <label for="starttime">Start time</label>
                    <input type="datetime-local" name="starttime" class="form-control" id="interview_start"  value=${start} required>
                </div>
                <div class="form-group">
                    <label for="endtime">End time</label>
                    <input type="datetime-local" name="endtime" class="form-control" id="interview_end"  value=${end} required>
                </div>

                <div class="form-group">
                    <label for="interviewer">Interviewer</label>
                    <select id="interview_interviewer" name="interviewer_id">
                    ${ select_interviewers}
                
                    </select>
                </div>
                <div class="form-group">
                    <label for="interviewee">Interviewee</label>
                    ${select_participants}
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


        const form = document.getElementById('create_interview');
        let request = Utils.parseRequestURL()
        let id = request.id

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
              interview["id"] = id;
            console.log(interview)
            console.log("ppp")
            let x =patchInterview(interview);

        
          

          })

        

        
    }

}

export default EditInterview;