
let Navbar = {
    render: async () => {
        let view =  /*html*/`
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="navbar-brand">

                            <a class="navbar-item" href="/#/">
                                Interview App
                            </a>
                        
                    </div>
               
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#/new_interviews">New Interview </a>
                        <a class="nav-item nav-link active" href="#/interviewers"> Interviewer </a>
                        <a class="nav-item nav-link active" href="#/interviewees">Interviewee </a>
                        
                        </div>
                    </div>
                </nav>
        
             
        `
        return view
    },

    after_render: async () => { }

}

export default Navbar;
