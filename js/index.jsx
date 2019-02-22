import React from 'react';
import ReactDOM from 'react-dom';

import Card from "./components/card";
import Navigation from "./components/navigation";
import Jumbotron from "./components/jumbotron";
import Footer from "./components/footer";

ReactDOM.render(
    <div>

        <Navigation />

        <Jumbotron/>

      <main role="main" className={"container"}>

        <div className={"starter-template"}>
          <h1>Bootstrap starter template</h1>
          <p className={"lead"}>Use this document as a way to quickly start any new project.<br />
          All you get is this text and a mostly barebones HTML document.</p>
        </div>

      </main>

        <div className={'container-fluid'}>
            <div className={'row'}>
                <div className={'col-md-4'}><Card text={'And Justice For All'} image={'./images/andjusticeforall.jpg'} /></div>
                <div className={'col-md-4'}><Card text={'Black Album'} image={'./images/blackalbum.jpg'}  /></div>
                <div className={'col-md-4'}><Card text={'Death Magnetic'} image={'./images/deathmagnetic.jpg'}  /></div>
            </div>

          <div className={'row'}>
            <div className={'col-md-4'}><Card text={'Saint Anger Album'} image={'./images/stanger.jpg'} /></div>
            <div className={'col-md-4'}><Card text={'Hardwired To Self Destruct'} image={'./images/hardwiredtoselfdestruct.jpg'}  /></div>
            <div className={'col-md-4'}><Card text={'Kill em All Album'} image={'./images/killemall.jpg'}  /></div>
          </div>

            <div className={'row'}>
                <div className={"col-md-12"}>

                </div>
            </div>

        </div>

      <Footer/>

    </div>
,
document.getElementById('root'));