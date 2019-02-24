import React from 'react';
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default props => (
  <div id={'link'}>

    <Navigation/>

    <section className="jumbotron text-center">
      <div className={'container'}>
        <div className={'row'}>
          <h1>Link</h1>
        </div>
      </div>
    </section>

    <Footer/>

  </div>
)