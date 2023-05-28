import React from "react";

function TopSellers() {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
        <h2 className="section-heading">Our Top Sellers</h2>
        <div className="d-flex align-items-center">
          <button className="btn btn-light btn-light-rounded">
            <i className="fa fa-angle-left"></i>
          </button>
          <button className="btn btn-light btn-light-rounded">
            <i className="fa fa-angle-right"></i>
          </button>
          <button className="btn btn-light ml-3 btn-style">
            View All <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="mt-3">
        <div className="row">
          <div className="col-6 col-md-4 col-xl-2 mb-3">
            <div className="card top-sellers-card border-0">
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="rounded-circle top-sellers-image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SMN3aogg-vB_IGfqGsvPC71cSKoezdblgQ&usqp=CAU"
                    alt="Card image cap"
                  />
                  <p className="mt-2 mb-0 font-weight-bold">Jim_Sechen</p>
                  <p className="profile-name">$1,908</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2 mb-3">
            <div className="card top-sellers-card border-0">
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="rounded-circle top-sellers-image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SMN3aogg-vB_IGfqGsvPC71cSKoezdblgQ&usqp=CAU"
                    alt="Card image cap"
                  />
                  <p className="mt-2 mb-0 font-weight-bold">Jim_Sechen</p>
                  <p className="profile-name">$1,908</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2 mb-3">
            <div className="card top-sellers-card border-0">
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="rounded-circle top-sellers-image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SMN3aogg-vB_IGfqGsvPC71cSKoezdblgQ&usqp=CAU"
                    alt="Card image cap"
                  />
                  <p className="mt-2 mb-0 font-weight-bold">Jim_Sechen</p>
                  <p className="profile-name">$1,908</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2 mb-3">
            <div className="card top-sellers-card border-0">
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="rounded-circle top-sellers-image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SMN3aogg-vB_IGfqGsvPC71cSKoezdblgQ&usqp=CAU"
                    alt="Card image cap"
                  />
                  <p className="mt-2 mb-0 font-weight-bold">Jim_Sechen</p>
                  <p className="profile-name">$1,908</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2 mb-3">
            <div className="card top-sellers-card border-0">
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="rounded-circle top-sellers-image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SMN3aogg-vB_IGfqGsvPC71cSKoezdblgQ&usqp=CAU"
                    alt="Card image cap"
                  />
                  <p className="mt-2 mb-0 font-weight-bold">Jim_Sechen</p>
                  <p className="profile-name">$1,908</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2 mb-3">
            <div className="card top-sellers-card border-0">
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="rounded-circle top-sellers-image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SMN3aogg-vB_IGfqGsvPC71cSKoezdblgQ&usqp=CAU"
                    alt="Card image cap"
                  />
                  <p className="mt-2 mb-0 font-weight-bold">Jim_Sechen</p>
                  <p className="profile-name">$1,908</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSellers;
