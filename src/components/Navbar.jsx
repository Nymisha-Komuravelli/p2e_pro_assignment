import React from "react";

function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-3">
          <div>
            <img
              src="https://i.tracxn.com/logo/company/prepro_9497cdd7-b677-423d-bee2-10ac8963e213.PNG?height=120&width=120"
              className="navbar-logo"
            />
            <a className="navbar-brand font-weight-bold" href="#">
              P2E Pro
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <form className="form-inline my-2 my-lg-0 ml-lg-5">
              <i className="fa fa-search navbar-search-icon"></i>
              <input
                className="form-control mr-sm-2 input-search"
                type="search"
                placeholder="Collection, item or user"
              />
            </form>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Create
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="px-lg-2" href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZifvveZ9bsdeiCxsVqmT_tmAHoF6bt0nKQ9EBQwa4nP4nXPI7z-Uq3y0pHRA3KwBZup8&usqp=CAU"
                    className="profile-image"
                  />
                </a>
              </li>
              <li className="nav-item">
                <button className="btn blue-btn mt-2 mt-lg-0">
                  <i className="fa fa-sign-in"></i> Login
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
