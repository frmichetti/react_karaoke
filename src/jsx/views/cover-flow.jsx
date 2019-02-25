import React from 'react';

import Navigation from "../components/navigation";
import Jumbotron from "../components/jumbotron";
import Footer from "../components/footer";
import HeadTitle from "../components/head-title";
import CoverFlow from "../components/cover-flow";

export default props => (
  <div id={'cover-flow'}>

    <Navigation/>

    <Jumbotron/>

    <HeadTitle/>

    <CoverFlow />

    <Footer/>

  </div>
)