let getInterviewees = async () => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts/` + id, options)
       const json = await response.json();
       // console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
  }
  
  
  
  
  let Interviewees = {
      render : async () => {
          // let interviewees = await getPostsList()
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
              
                  <tr>
                  <td>name1</td>
                  <td>email1</td>
                  
                  <td><a href="/#/interviewees">Resume</a></td>
                  
                  <td>  <td> <a class="navbar-item" href="/#/interviewees">  Delete </a></td></td>
                  </tr>
              
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
  
  