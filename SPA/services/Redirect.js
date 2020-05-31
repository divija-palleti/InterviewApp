

import routes from "./Router.js";
import Error404 from "../views/pages/Error404.js";


let Redirect = async (path) => {
    
    let parsedURL = path
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    
    location.hash = path;
    content.innerHTML = await page.render();
    
    await page.after_render();
}

export default Redirect;
