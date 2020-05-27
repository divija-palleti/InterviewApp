import Redirect        from '../../services/Redirect.js'

let postInterviewee = async (formData) => {

  // let response = await fetch('http://localhost:3000/interviewees', {
  //           method: 'POST',
  //           body: formData
  //         });
      
  //         let result = await response.json();
      
  //         alert(result.message);

  const options = {
      method: "POST",
      headers: {
        "Content-Type": 'multipart/form-data',
      },
      body:formData,
    };
    try {
      const response = await fetch(`http://localhost:3000/interviewees`, options);
      const json = await response.json();
   
      console.log(json)
      if(json.success){
       alert("Interviewee Created");
         Redirect('/interviewees')
      }
      else{
          var x;
          var obj = json.errors;
          console.log(obj)

       alert("Interviewee not Created");
       for (x in obj) {
          alert(`${x} - ${obj[x]}`);
        }

 
      }
    } catch (err) {
      console.log(err);
    }

}


let NewInterviewee = {
    render : async () => {
       
        let view =  /*html*/`
        
        <h1> New Interviewer</h1>
        <div class="container">
            <form id="new_interviewee" enctype=”multipart/form-data” >
                <div class="form-group">
                  <label for="title">Name</label>
                  <input class="form-control" type="text" name="name" id="interviewee_name" required>
                  
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input class="form-control" type="email" name="email" id="interviewee_email" required>
                </div>
                <div class="form-group">
                  <label for="resume">Resume(pdf only)</label>
                  <input class="form-control" type="file" name="resume" id="interviewee_resume" accept="application/pdf" required>
                </div>
                
               
                <button type="submit" name="submit" class="btn btn-primary">Submit</button>
               
            </form>
                <div class="text-center">
                    <a href="/#/interviewees">
                    Cancel
                    </a>
                </div>
             
        </div>
            
        `
        return view
    }
    , after_render: async () => {

      const form = document.getElementById('new_interviewee');

      form.addEventListener('submit', event => {
          event.preventDefault();
          console.log("p")
          let formData = new FormData(new_interviewee)
          formData.append('name', interviewee_name)
          formData.append('email', interviewee_email)
          const file = document.getElementById('interviewee_resume').files[0];
         
          formData.append('resume',   file)
         
          console.log(formData);
          for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
          // console.log()

          // let response = await fetch('http://localhost:3000/interviewees', {
          //   method: 'POST',
          //   body: new FormData(formElem)
          // });
      
          // let result = await response.json();
      
          // alert(result.message);

          // let formData = new FormData()
          // formData.append("resume", interviewee_resume)
          // formData.append('name', interviewee_name)
          // formData.append('email', interviewee_email)
          // let interviewee = {}; 
          // Object.keys(form.elements).forEach(key => {
          //     let element = form.elements[key];
          //     if (element.type !== "submit") {

          //         interviewee[element.name] = element.value;
          //     }
              
          //   });
          // console.log(formData);
          postInterviewee(formData);

        })
      }
  
  }

export default NewInterviewee;