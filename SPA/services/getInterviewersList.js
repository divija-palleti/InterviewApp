let getInterviewersList = async () => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`http://localhost:3000/interviewers/`, options)
       const json = await response.json();
       console.log("p")
       console.log(json)
       return json
   } catch (err) {
    console.log("p")
       console.log('Error getting documents', err)
   }
  }

  export default getInterviewersList