let getInterviews = async () => {
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




let Interviews = {
    render : async () => {
        // let interviews = await getPostsList()
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
            
                <tr>
                  <td> <a class="navbar-item" href="/#/edit_interview/2">  Edit </a></td>
                  <td>title1</td>
                  <td>starttime1</td>
                  <td>endtime1</td>
                  <td>Intervieweremail</td>
                  <td> Interviewee1email <br>
                       Interviewee2email
                  </td>
                  <td>  <td> <a class="navbar-item" href="/#/">  Delete </a></td></td>
                </tr>
            
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

