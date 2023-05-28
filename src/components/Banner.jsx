import React from "react";

function Banner() {
  return (
    <div className="container-fluid banner-heading d-flex flex-column justify-content-center p-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <p className="banner-yellow-text">NFT</p>
              <p className="banner-yellow-text">MARKETPLACE</p>
              <p className="banner-pink-text">BASED ON</p>
              <p className="banner-pink-text">KALPATARA</p>
              <div className="d-flex flex-column flex-sm-row">
                <button className="btn btn-style btn-yellow mb-3 mb-sm-0">
                  Explore NFTs
                </button>
                <button className="btn btn-style btn-outline-dark">
                  Create NFT
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcvhu5mtTy5TIri96R_2Af_dfrtRqRd3qTrtj9njzs9LANb10dGWaRMj-_QLMZNp4hzIg&usqp=CAU"
              className="banner-image float-lg-right mt-3 mt-lg-0"
              alt="banner image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
