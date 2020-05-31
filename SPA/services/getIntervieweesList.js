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
    return json
} catch (err) {
    console.log('Error getting documents', err)
}
}

export default getIntervieweesList