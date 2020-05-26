"use strict";

import Navbar       from './views/Navbar.js'
import Interviews   from './views/pages/Interviews.js'
import Interviewers   from './views/pages/Interviewers.js'
import Interviewees   from './views/pages/Interviewees.js'
import New_interview from './views/pages/NewInterview.js'
import New_interviewer from './views/pages/NewInterviewer.js'
import New_interviewee from './views/pages/NewInterviewee.js'
import Edit_interview from './views/pages/EditInterview.js'
import Utils        from './services/Utils.js'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'             : Interviews
    , '/interviewers'   : Interviewers
    , '/interviewees'   : Interviewees
    , '/new_interviews'   : New_interview
    , '/new_interviewer'   : New_interviewer
    , '/new_interviewee'   : New_interviewee
    , '/edit_interview/:id'   : Edit_interview
    // , '/interviewers'      : Interviewers
    // , '/interviewers/:id'      : InterviewersShow
    // , '/interviewees'   : Interviewees
};

function parseRequestURL(){
    let url = location.hash.slice(1).toLowerCase() || '/';
    let r = url.split("/")
    let request = {
        resource    : null,
        id          : null,
        verb        : null
    }
    request.resource    = r[1]
    request.id          = r[2]
    request.verb        = r[3]
    return request
}

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
   
    
    // Render the Header and footer of the page
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();



    // Get the parsed URl from the addressbar
    let request = parseRequestURL()
    console.log(request)

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    console.log(parsedURL)
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
  
}




// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);