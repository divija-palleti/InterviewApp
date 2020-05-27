let getIntervieweesList = async () => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
    const response = await fetch(`http://localhost:3000/interviewees/`, options)
    const json = await response.json();
    console.log("p")
    console.log(json)
    return json
} catch (err) {
 console.log("p")
    console.log('Error getting documents', err)
}
}



window.deleteInterviewee = async (id) => {
  
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
        
           const response = await fetch(`http://localhost:3000/interviewees/${id}`, options)
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
  
  
  
  let Interviewees = {
      render : async () => {
          let i = await getIntervieweesList()
          let view =  /*html*/`
             
            <div class="container mt-5">
            <div class="page-header">
              <h1>Interviewees</h1>
            </div>
            </div>
  
            <div class="container mt-4">
            <table class="table table-striped">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Resume</th>
                </tr>
              </thead>
              <tbody>
                        ${ i.interviewees.map(interviewee => 
                          /*html*/`
                          <tr>
                        <td>${interviewee.name}</td>
                        <td>${interviewee.email}</td>
                        
                        <td><a href=${interviewee.r_link}>Resume</a></td>
                        
                        <td>  <td> <a class="navbar-item" onclick="deleteInterviewee(${interviewee.id})">  Delete </a></td></td>
                        </tr>
                          `
                          
                        )}
              
                 
              
              </tbody>
            </table>
            <div class="text-center">
                    <a href="/#/">
                    Back
                    </a>
            </div>
            <div class="text-center">
                    <a href="/#/new_interviewee">
                    New Interviewee
                    </a>
            </div>
  
            </div>
  
          `
          return view
      }
      , after_render: async () => {
      }
  
  }
  
  export default Interviewees;

  
  