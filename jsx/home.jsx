import React from 'react';

import Navigation from "./components/navigation";
import Jumbotron from "./components/jumbotron";
import Footer from "./components/footer";
import HeadTitle from "./components/head-title";
import ShopItems from "./components/shop-items";

export default props => (
  <div id={'home'}>

    <Navigation/>

    <Jumbotron/>

    <HeadTitle/>

    <ShopItems isCardView={true}/>

    <Footer/>

  </div>
)