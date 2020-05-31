import Redirect        from '../../services/Redirect.js'

let postInterviewer = async (interviewer) => {

  const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(interviewer),
    };
    try {
      const response = await fetch(`http://localhost:3000/interviewers`, options);
      const json = await response.json();
   
      console.log(json)
      if(json.success){
       alert("Interviewer Created");
         Redirect('/interviewers')
      }
      else{
          var x;
          var obj = json.errors;
          console.log(obj)

       alert("Interviewer not Created");
       for (x in obj) {
          alert(`${x} - ${obj[x]}`);
        }

 
      }
    } catch (err) {
      console.log(err);
    }

}


let NewInterviewer = {
    render : async () => {
       
        let view =  /*html*/`
        
        <h1> New Interviewer</h1>
        <div class="container">
            <form id="new_interviewer">
                <div class="form-group">
                  <label for="title">Name</label>
                  <input class="form-control" type="text" name="name" id="interviewer_name" required>
                  
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input class="form-control" type="email" name="email" id="interview_email" required>
                </div>
                <div class="form-group">
                  <label for="desc">Desc</label>
                  <input class="form-control" type="text" name="desc" id="interview_desc" value="">
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

      const form = document.getElementById('new_interviewer');

      form.addEventListener('submit', event => {
          event.preventDefault();
          let interviewer = {};

          
          Object.keys(form.elements).forEach(key => {
              let element = form.elements[key];
              if (element.type !== "submit") {

                  interviewer[element.name] = element.value;
              }
              
            });
          console.log(interviewer);
          postInterviewer(interviewer);
        })
      }
  
  }

export default NewInterviewer;