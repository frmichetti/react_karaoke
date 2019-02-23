import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from "./components/navigation";
import Jumbotron from "./components/jumbotron";
import Footer from "./components/footer";
import HeadTitle from "./components/head-title";
import ShopItems from "./components/shop-items";

ReactDOM.render(
    <div id={'main'}>

      <Navigation />

      <Jumbotron/>

      <HeadTitle/>

      <ShopItems isCardView={false} />

      <Footer/>

    </div>
,
document.getElementById('root'));