
let getInterviewsList = async () => {
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
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
  
  }
export  default getInterviewsList;