import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import HotCollections from "../components/HotCollections";
import MarketPlace from "../components/MarketPlace";
import Mintbuy from "../components/Mintbuy";
import Navbar from "../components/Navbar";
import TopSellers from "../components/TopSellers";
import TrendingAuctions from "../components/TrendingAuctions";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <TrendingAuctions />
      <TopSellers />
      <MarketPlace />
      <HotCollections />
      <Mintbuy />
      <Footer />
    </div>
  );
}

export default Home;
