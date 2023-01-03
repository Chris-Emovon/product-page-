const Navbar = () => {

    
 
    return ( 
      <div className="container-fluid ">
        <nav className="navbar navbar-expand-lg m-l 5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="/images/logo.svg" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Collections</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Women</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <img id="cart" src="/images/icon-cart.svg" alt="" />
            <img id="avatar" src="/images/image-avatar.png" alt=""/>
          </div>
        </div>
       </nav>
      </div>

     );
}
 
export default Navbar; 
