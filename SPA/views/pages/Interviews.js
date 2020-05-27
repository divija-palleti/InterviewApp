import Redirect        from '../../services/Redirect.js'


let getInterviewList = async () => {
  console.log("fails2")
  const options = {
     method: 'GET',
     headers: {
      'Content-Type': 'application/json',
      // 'X-CSRF-Token': Rails.csrfToken()
     }
 };
 try {
  
     const response = await fetch(`http://localhost:3000/interviews/`, options)
    
     const json = await response.json();
     
     console.log(json)
     
     return json
 } catch (err) {
     console.log('Error getting documents', err)
 }

}


window.deleteInterview = async (id) => {
  
  const confirm = window.confirm("Are you sure? ");
  if(confirm)
  {
       const options = {
           method: 'DELETE',
           headers: {
            'Content-Type': 'application/json',
            
           }
       };
       try {
        
           const response = await fetch(`http://localhost:3000/interviews/${id}`, options)
           const json = await response.json();
           console.log(json)
           if(json.success)
           {
            alert('DELETED');
            location.reload();
           
           }
           else{
            alert('not DELETED')
           
           }
           return json
       } catch (err) {
           console.log('Error getting documents', err)
       }
  }
  
}

let getParticipantList = (participants)=>{
  let p='';
    for(var i=0;i<participants.length;i++)
    {
      p+=`${participants[i]}<br>`
    }
  return p
}


let Interviews = {
    render : async () => {
       
        let interviews = await getInterviewList()
        let view =  /*html*/`
           
          <div class="container mt-5">
          <div class="page-header">

            <h1>Interviews</h1>
          </div>
          </div>

          <div class="container mt-4">
          <table class="table table-striped">
        
            <thead>
              <tr>
                <th ></th>
                <th>Title</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Interviewer</th>
                <th>Interviewees</th>
                <th ></th>
              </tr>
            </thead>
            <tbody>
              ${ interviews.interviews.map(interview => 
                /*html*/`
                
              <tr>
                <td> <a class="navbar-item" href="/#/interview/${interview.id}/edit">  Edit </a></td>
                <td>${interview.title}</td>
                <td>${ Date(interview.start)}</td>
                <td>${Date(interview.end)}</td>
                <td>${interview.interviewer_email}</td>
                <td>${getParticipantList(interview.participants)}
                  </td>
              
                <td> <a class="navbar-item" onclick="deleteInterview(${interview.id})">  Delete </a></td>
              </tr>
                
                `
                )
            }
            </tbody>
          </table>

          </div>

        `
        return view
    }
    , after_render: async () => {

 


    }

}

export default Interviews;

