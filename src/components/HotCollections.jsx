import React from "react";

function HotCollections() {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
        <h2 className="section-heading">Hot Collections</h2>
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
          <div className="col-sm-6 col-xl-4">
            <div className="card border-0 bg-light p-1 mb-3">
              <div className="card-body text-center">
                <img
                  className="card-img-top rounded"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfThGtpFd1uTI0NBU5KxMxqLzXrgzBzWRY3A&usqp=CAU"
                  alt="Card image cap"
                />
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqxDcGx86_vbeoHmzCpgg-Zp4kFF_kRkWhQ&usqp=CAU"
                    alt=""
                    className="hot-collections-small-image rounded"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdzGJ-EJ_uk5Bffw9NFZMXMawRcz6HTLHyQ&usqp=CAU"
                    alt=""
                    className="hot-collections-small-image rounded-circle small-circle-image"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4AtB78IsFWTHmBEghpxo1pyNNtByx4xwEA&usqp=CAU"
                    alt=""
                    className="hot-collections-small-image rounded"
                  />
                </div>
                <h5 className="mt-3 font-weight-bold">Sound of Silence</h5>
                <p className="profile-name">235 in Collection</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="card border-0 bg-light p-1 mb-3">
              <div className="card-body text-center">
                <img
                  className="card-img-top rounded"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfThGtpFd1uTI0NBU5KxMxqLzXrgzBzWRY3A&usqp=CAU"
                  alt="Card image cap"
                />
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqxDcGx86_vbeoHmzCpgg-Zp4kFF_kRkWhQ&usqp=CAU"
                    alt=""
                    className="hot-collections-small-image rounded"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdzGJ-EJ_uk5Bffw9NFZMXMawRcz6HTLHyQ&usqp=CAU"
                    alt=""
                    className="hot-collections-small-image rounded-circle small-circle-image"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4AtB78IsFWTHmBEghpxo1pyNNtByx4xwEA&usqp=CAU"
                    alt=""
                    className="hot-collections-small-image rounded"
                  />
                </div>
                <h5 className="mt-3 font-weight-bold">Sound of Silence</h5>
                <p className="profile-name">235 in Collection</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-4">
            <div className="card border-0 bg-light p-1 mb-3">
              <div className="card-body text-center">
                <img
                  className="card-img-top rounded"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfThGtpFd1uTI0NBU5KxMxqLzXrgzBzWRY3A&usqp=CAU"
                  alt="Card image cap"
                />
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqxDcGx86_vbeoHmzCpgg-Zp4kFF_kRkWhQ&usqp=CAU"
                    alt=""
                    className="hot-collections-small-image rounded"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdzGJ-EJ_uk5Bffw9NFZMXMawRcz6HTLHyQ&usqp=CAU"
                    alt=""
                    className="hot-collections-small-image rounded-circle small-circle-image"
                  />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4AtB78IsFWTHmBEghpxo1pyNNtByx4xwEA&usqp=CAU"
                    alt=""
                    className="hot-collections-small-image rounded"
                  />
                </div>
                <h5 className="mt-3 font-weight-bold">Sound of Silence</h5>
                <p className="profile-name">235 in Collection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotCollections;
