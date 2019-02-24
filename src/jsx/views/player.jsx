import React from 'react';
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import LyricPlayer from "../components/lyric-player";

export default props => (
  <div id={'player'}>

    <Navigation/>

    <section className="jumbotron text-center">
      <div className={'container'}>
        <div className={'row'}>
          <h1>Player</h1>
        </div>
      </div>
      <LyricPlayer />
    </section>

    <Footer/>

  </div>
)