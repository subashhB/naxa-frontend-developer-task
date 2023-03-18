

const Navbar = () =>{
    return (
        <header>
            <div className="container">
                <img src="https://www.naxa.com.np/792f5bf2487bd27628a54fe64a712630.png"/>
                <nav>
                    <div className="main-nav">
                        <a href="#">Services</a>
                        <a href="#" >Portfolio <i className="fa fa-caret-down"></i></a>
                        <a href="#">Company <i className="fa fa-caret-down"></i></a>
                        <a href="#">Events & Media  <i className="fa fa-caret-down"></i></a>
                        <a href="#">Blogs</a>
                    </div>
                </nav>
                <div className="nav-right">
                    <button>Let's Talk</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar