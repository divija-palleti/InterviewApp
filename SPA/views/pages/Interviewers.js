import Redirect        from '../../services/Redirect.js'
import getInterviewersList        from '../../services/getInterviewersList.js'


  window.deleteInterviewer = async (id) => {
  
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
          
             const response = await fetch(`http://localhost:3000/interviewers/${id}`, options)
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
  
  
  
  
  let Interviewers = {

      render : async () => {
        console.log("p")
          let interviewers = await getInterviewersList()
          let view =  /*html*/`
             
            <div class="container mt-5">
            <div class="page-header">
              <h1>Interviewers</h1>
            </div>
            </div>
  
            <div class="container mt-4">
            <table class="table table-striped">
              <thead>
                <tr>
        
                    <th>Name</th>
                    <th>Desc</th>
                    <th>Email</th>
                </tr>
              </thead>
              <tbody>
                      ${ interviewers.map(interviewer => 
                        /*html*/`
                        
                      <tr>
                       
                        <td>${interviewer.name}</td>
                        <td>${interviewer.desc}</td>
                        <td>${interviewer.email}</td>
                       
                        
                      
                        <td>  <td> <a class="navbar-item" onclick="deleteInterviewer(${interviewer.id})">  Delete </a></td></td>
                      </tr>
                        
                        `
                        )
                    }
              
                
              
              </tbody>
            </table>
            <div class="text-center">
                    <a href="/#/">
                    Back
                    </a>
            </div>
            <div class="text-center">
                    <a href="/#/new_interviewer">
                    New Interviewer
                    </a>
            </div>
  
            </div>
  
          `
          return view
      }
      , after_render: async () => {
      }
  
  }
  
 export default Interviewers;
  
  