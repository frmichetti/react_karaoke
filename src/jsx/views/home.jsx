import React from 'react';

import Navigation from "../components/navigation";
import Jumbotron from "../components/jumbotron";
import Footer from "../components/footer";
import HeadTitle from "../components/head-title";
import ShopItems from "../components/shop-items";

export default props => (
  <div id={'home'}>

    <Navigation/>

    <Jumbotron title={'Home Cards and List Example'} text={'This is a Cards and List Example'}/>

    <HeadTitle/>

    <ShopItems isCardView={true}/>

    <Footer/>

  </div>
)