import React from "react";

function MarketPlace() {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center align-items-md-end flex-wrap">
        <h2 className="section-heading mb-0">
          Market Place
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKj2PB8MeL-EisooAOwZVOD6W9x0jjesz4w&usqp=CAU"
            className="heart-icon pl-2"
          />
        </h2>
        <div className="d-flex flex-column flex-md-row align-items-end">
          <form className="form-inline my-2 my-lg-0 ml-lg-5">
            <i className="fa fa-search navbar-search-icon"></i>
            <input
              className="form-control mr-sm-2 input-search"
              type="search"
              placeholder="Search"
            />
          </form>
          <div className="d-flex flex-column">
            <span className="filter-sort-outline-text">FILTER &amp; SORT</span>
            <button
              className="btn btn-light btn-style py-2 w-auto"
              style={{ maxWidth: "initial" }}
            >
              <i className="fa fa-sort-amount-asc mr-2"></i> Price: Low to High
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-5 d-flex flex-wrap">
        <button className="btn btn-style btn-light rounded-btn blue-btn mb-3 mr-3">
          <i className="fa fa-music pr-2"></i>
          Trending
        </button>
        <button className="btn btn-light btn-style rounded-btn mb-3 mr-3">
          <i className="fa fa-music pr-2"></i>
          Art
        </button>
        <button className="btn btn-light btn-style rounded-btn mb-3 mr-3">
          <i className="fa fa-bolt pr-2"></i>
          Music
        </button>
        <button className="btn btn-light btn-style rounded-btn mb-3 mr-3">
          <i className="fa fa-expand pr-2"></i>
          Video
        </button>
        <button className="btn btn-light btn-style rounded-btn mb-3 mr-3">
          <i className="fa fa-bolt pr-2"></i>
          Sports
        </button>
        <button className="btn btn-light btn-style rounded-btn mb-3 mr-3">
          <i className="fa fa-expand pr-2"></i>
          Utility
        </button>
        <button className="btn btn-light btn-style rounded-btn mb-3 mr-3">
          <i className="fa fa-music pr-2"></i>
          Photography
        </button>
        <button className="btn btn-light btn-style rounded-btn mb-3 mr-3">
          <i className="fa fa-trophy pr-2"></i>
          Game
        </button>
        <button className="btn btn-light btn-style rounded-btn mb-3 mr-3">
          <i className="fa fa-music pr-2"></i>
          Photograph
        </button>
      </div>
      <div className="mt-3">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card mb-3">
              <div className="d-flex py-2 px-3 justify-content-between align-items-center">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcH39RIY3ka85PRTceGNy7eT7mMrHsw-jSw&usqp=CAU"
                    className="profile-image"
                  />
                  <span className="ml-1 profile-name">@gharliera</span>
                </div>
                <i className="fa fa-ellipsis-h profile-name"></i>
              </div>

              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNm1tzvaCZnEzh8IOBoQoso2-uS9YwahOgw&usqp=CAU"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="d-flex py-2 justify-content-between align-items-center">
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXpi1Nrns6Lg_qmU2V4jJ4kexQbqsgKyCxg&usqp=CAU"
                      className="profile-image"
                    />
                    <span className="ml-1 profile-name">Special Surprise</span>
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIopy_P4cB5Qwd_W6Ndjj-D5Qygt40CQM87Q&usqp=CAU"
                    className="heart-icon"
                  />
                </div>
                <h5 className="mt-1 font-weight-bold">Geometrical Figure</h5>
              </div>
              <div className="card-footer py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="light-text-small mb-1">Current bid</p>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDn0ojTITvcdAzMsfBMJaZC4STaDHzduleQ&usqp=CAU"
                      className="crypto-logo"
                    />
                    <span className="crypto-coin-count">0.40 ETH</span>
                  </div>
                  <div className="text-right">
                    <button className="btn rounded-btn blue-btn">
                      Place a bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card mb-3">
              <div className="d-flex py-2 px-3 justify-content-between align-items-center">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcH39RIY3ka85PRTceGNy7eT7mMrHsw-jSw&usqp=CAU"
                    className="profile-image"
                  />
                  <span className="ml-1 profile-name">@gharliera</span>
                </div>
                <i className="fa fa-ellipsis-h profile-name"></i>
              </div>

              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNm1tzvaCZnEzh8IOBoQoso2-uS9YwahOgw&usqp=CAU"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="d-flex py-2 justify-content-between align-items-center">
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXpi1Nrns6Lg_qmU2V4jJ4kexQbqsgKyCxg&usqp=CAU"
                      className="profile-image"
                    />
                    <span className="ml-1 profile-name">Special Surprise</span>
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIopy_P4cB5Qwd_W6Ndjj-D5Qygt40CQM87Q&usqp=CAU"
                    className="heart-icon"
                  />
                </div>
                <h5 className="mt-1 font-weight-bold">Geometrical Figure</h5>
              </div>
              <div className="card-footer py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="light-text-small mb-1">Current bid</p>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDn0ojTITvcdAzMsfBMJaZC4STaDHzduleQ&usqp=CAU"
                      className="crypto-logo"
                    />
                    <span className="crypto-coin-count">0.40 ETH</span>
                  </div>
                  <div className="text-right">
                    <button className="btn rounded-btn blue-btn">
                      Place a bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card mb-3">
              <div className="d-flex py-2 px-3 justify-content-between align-items-center">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcH39RIY3ka85PRTceGNy7eT7mMrHsw-jSw&usqp=CAU"
                    className="profile-image"
                  />
                  <span className="ml-1 profile-name">@gharliera</span>
                </div>
                <i className="fa fa-ellipsis-h profile-name"></i>
              </div>

              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNm1tzvaCZnEzh8IOBoQoso2-uS9YwahOgw&usqp=CAU"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="d-flex py-2 justify-content-between align-items-center">
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXpi1Nrns6Lg_qmU2V4jJ4kexQbqsgKyCxg&usqp=CAU"
                      className="profile-image"
                    />
                    <span className="ml-1 profile-name">Special Surprise</span>
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIopy_P4cB5Qwd_W6Ndjj-D5Qygt40CQM87Q&usqp=CAU"
                    className="heart-icon"
                  />
                </div>
                <h5 className="mt-1 font-weight-bold">Geometrical Figure</h5>
              </div>
              <div className="card-footer py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="light-text-small mb-1">Current bid</p>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDn0ojTITvcdAzMsfBMJaZC4STaDHzduleQ&usqp=CAU"
                      className="crypto-logo"
                    />
                    <span className="crypto-coin-count">0.40 ETH</span>
                  </div>
                  <div className="text-right">
                    <button className="btn rounded-btn blue-btn">
                      Place a bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card mb-3">
              <div className="d-flex py-2 px-3 justify-content-between align-items-center">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcH39RIY3ka85PRTceGNy7eT7mMrHsw-jSw&usqp=CAU"
                    className="profile-image"
                  />
                  <span className="ml-1 profile-name">@gharliera</span>
                </div>
                <i className="fa fa-ellipsis-h profile-name"></i>
              </div>

              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNm1tzvaCZnEzh8IOBoQoso2-uS9YwahOgw&usqp=CAU"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="d-flex py-2 justify-content-between align-items-center">
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXpi1Nrns6Lg_qmU2V4jJ4kexQbqsgKyCxg&usqp=CAU"
                      className="profile-image"
                    />
                    <span className="ml-1 profile-name">Special Surprise</span>
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIopy_P4cB5Qwd_W6Ndjj-D5Qygt40CQM87Q&usqp=CAU"
                    className="heart-icon"
                  />
                </div>
                <h5 className="mt-1 font-weight-bold">Geometrical Figure</h5>
              </div>
              <div className="card-footer py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="light-text-small mb-1">Current bid</p>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDn0ojTITvcdAzMsfBMJaZC4STaDHzduleQ&usqp=CAU"
                      className="crypto-logo"
                    />
                    <span className="crypto-coin-count">0.40 ETH</span>
                  </div>
                  <div className="text-right">
                    <button className="btn rounded-btn blue-btn">
                      Place a bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-6 offset-md-3 btn-style"
            style={{ maxWidth: "initial" }}
          >
            <button className="btn btn-light btn-block py-2 mt-2">
              <i className="fa fa-spinner mr-2"></i> View all items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
