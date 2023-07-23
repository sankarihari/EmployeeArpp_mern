import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light header">
          <div className="container-fluid">
            <a href="index.html" className="logo d-flex align-items-center">
                <img src="./assets/img/ict_logo.png" alt="" />
                <span className="d-none d-lg-block">Employee</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarButtonsExample">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/viewemployee">
                    Home
                  </a>
                </li>
                {userStatus ==="user"? <li class="nav-item" style={{display:"none"}}>
                <a class="nav-link active " aria-current="page" href="/addemployee">Add Employee test</a>
                </li>:<li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/addemployee">Add Employee</a>
                </li>}
                
                <li class="nav-item">
                  <a class="nav-link" href="/viewemployee">Employee Details</a>
                </li>
              
              </ul>
             
              <div className="d-flex align-items-center">
                <div className="dropdown">
                    <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="./img/profile.png" className="rounded-circle" height="50" alt="Black and White Portrait of a Man" loading="lazy" /><p>{userStatus}</p>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                    
                    <li>
                        <a className="dropdown-item" href="/">Logout</a>
                    </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Header