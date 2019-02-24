import React from 'react';
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import LyricPlayer from "../components/lyric-player";

export default props => (
  <div id={'home'}>

    <Navigation/>

    <section className="jumbotron text-center">
      <div className={'container'}>
        <div className={'row'}>
          <h1>Player</h1>
        </div>
      </div>
      <LyricPlayer songUrl={"https://open.spotify.com/track/52LlzTfdulBMiwH4BZy5Sq?si=1c1rwqNYSf6ZaaRbzlstLQ"}
                   songName={"Let's Go To the Forest"}
                   artirstUrl={"https://open.spotify.com/artist/6OqhFYFJDnBBHas02HopPT?si=vQaSwY1DRkyhj-eoKZlMrw"}
                   artistName={"Kero Kero Bonito"}
                   mp3={"https://i.koya.io/Kero%20Kero%20Bonito%20-%20Let's%20Go%20To%20The%20Forest.mp3"}  />
    </section>

    <Footer/>

  </div>
)