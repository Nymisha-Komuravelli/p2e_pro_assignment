import React from "react";

function TrendingAuctions() {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
        <h2 className="section-heading">Trending Auctions</h2>
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
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card mb-3">
              <div className="d-flex py-2 px-3 justify-content-between align-items-center">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU"
                    className="profile-image"
                  />
                  <span className="ml-1 profile-name">@jkrowling</span>
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIopy_P4cB5Qwd_W6Ndjj-D5Qygt40CQM87Q&usqp=CAU"
                  className="heart-icon"
                />
              </div>

              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0lWo_v25xUHvplUgxkeLYJAo5ePTRFPwREA&usqp=CAU"
                alt="Card image cap"
              />
              <div className="card-body">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXpi1Nrns6Lg_qmU2V4jJ4kexQbqsgKyCxg&usqp=CAU"
                    className="profile-image"
                  />
                  <span className="ml-1 profile-name">@jkrowling</span>
                </div>
                <h5 className="mt-1 font-weight-bold">Way Back home</h5>
              </div>
              <div className="card-footer py-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="light-text-small mb-1">Current bid</p>
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="crypto-logo"
                    />
                    <span className="crypto-coin-count">0.40 ETH</span>
                  </div>
                  <div className="text-right">
                    <p className="light-text-small mb-1">Ending in</p>
                    <div>07h 34m 50s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card mb-3">
              <div className="d-flex py-2 px-3 justify-content-between align-items-center">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU"
                    className="profile-image"
                  />
                  <span className="ml-1 profile-name">@jkrowling</span>
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIopy_P4cB5Qwd_W6Ndjj-D5Qygt40CQM87Q&usqp=CAU"
                  className="heart-icon"
                />
              </div>
            
              <img
                className=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0lWo_v25xUHvplUgxkeLYJAo5ePTRFPwREA&usqp=CAU"
                alt="Card image cap"
              />
              <div className="card-body">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXpi1Nrns6Lg_qmU2V4jJ4kexQbqsgKyCxg&usqp=CAU"
                    className="profile-image"
                  />
                  <span className="ml-1 profile-name">@jkrowling</span>
                </div>
                <h5 className="mt-1 font-weight-bold">Way Back home</h5>
              </div>
              <div className="card-footer py-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="light-text-small mb-1">Current bid</p>
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="crypto-logo"
                    />
                    <span className="crypto-coin-count">0.40 ETH</span>
                  </div>
                  <div className="text-right">
                    <p className="light-text-small mb-1">Ending in</p>
                    <div>07h 34m 50s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card mb-3">
              <div className="d-flex py-2 px-3 justify-content-between align-items-center">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU"
                    className="profile-image"
                  />
                  <span className="ml-1 profile-name">@jkrowling</span>
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIopy_P4cB5Qwd_W6Ndjj-D5Qygt40CQM87Q&usqp=CAU"
                  className="heart-icon"
                />
              </div>

              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0lWo_v25xUHvplUgxkeLYJAo5ePTRFPwREA&usqp=CAU"
                alt="Card image cap"
              />
              <div className="card-body">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXpi1Nrns6Lg_qmU2V4jJ4kexQbqsgKyCxg&usqp=CAU"
                    className="profile-image"
                  />
                  <span className="ml-1 profile-name">@jkrowling</span>
                </div>
                <h5 className="mt-1 font-weight-bold">Way Back home</h5>
              </div>
              <div className="card-footer py-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="light-text-small mb-1">Current bid</p>
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="crypto-logo"
                    />
                    <span className="crypto-coin-count">0.40 ETH</span>
                  </div>
                  <div className="text-right">
                    <p className="light-text-small mb-1">Ending in</p>
                    <div>07h 34m 50s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card mb-3">
              <div className="d-flex py-2 px-3 justify-content-between align-items-center">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU"
                    className="profile-image"
                  />
                  <span className="ml-1 profile-name">@jkrowling</span>
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIopy_P4cB5Qwd_W6Ndjj-D5Qygt40CQM87Q&usqp=CAU"
                  className="heart-icon"
                />
              </div>

              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0lWo_v25xUHvplUgxkeLYJAo5ePTRFPwREA&usqp=CAU"
                alt="Card image cap"
              />
              <div className="card-body">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXpi1Nrns6Lg_qmU2V4jJ4kexQbqsgKyCxg&usqp=CAU"
                    className="profile-image"
                  />
                  <span className="ml-1 profile-name">@jkrowling</span>
                </div>
                <h5 className="mt-1 font-weight-bold">Way Back home</h5>
              </div>
              <div className="card-footer py-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="light-text-small mb-1">Current bid</p>
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="crypto-logo"
                    />
                    <span className="crypto-coin-count">0.40 ETH</span>
                  </div>
                  <div className="text-right">
                    <p className="light-text-small mb-1">Ending in</p>
                    <div>07h 34m 50s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingAuctions;
