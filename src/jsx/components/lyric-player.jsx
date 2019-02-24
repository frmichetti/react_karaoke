import React, {Component} from 'react';

export default class LyricPlayer extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
      var _data;
      var currentLine = "";

      var promise = fetch('http://localhost:3000/lyrics/enter-sandman.lyric.json')
      promise.then(function(response){
        response.json().then(function (data) {
          _data = data;

          function align() {
            var a = $(".highlighted").height();
            var c = $(".content").height();
            var d = $(".highlighted").offset().top - $(".highlighted").parent().offset().top;
            var e = d + (a / 2) - (c / 2);
            $(".content").animate(
              {scrollTop: e + "px"}, {easing: "swing", duration: 250}
            );
          }

          var lyricHeight = $(".lyrics").height();
          $(window).on("resize", function () {
            if ($(".lyrics").height() != lyricHeight) { //Either width changes so that a line may take up or use less vertical space or the window height changes, 2 in 1
              lyricHeight = $(".lyrics").height();
              align();
            }
          });

          $(document).ready(function () {
            $("video").on('timeupdate', function (e) {
              var time = this.currentTime * 1000;
              var past = _data["lyrics"].filter(function (item) {
                return item.time < time;
              });
              if (_data["lyrics"][past.length] != currentLine) {
                currentLine = _data["lyrics"][past.length];
                $(".lyrics div").removeClass("highlighted");
                $(`.lyrics div:nth-child(${past.length})`).addClass("highlighted"); //Text might take up more lines, do before realigning
                align();
              }
            });
          });

          generate();

          function generate() {
            var html = "";
            for (var i = 0; i < _data["lyrics"].length; i++) {
              html += "<div";
              if (i == 0) {
                html += ` class="highlighted"`;
                currentLine = 0;
              }
              if (_data["lyrics"][i]["note"]) {
                html += ` note="${_data["lyrics"][i]["note"]}"`;
              }
              html += ">";
              html += _data["lyrics"][i]["line"] == "" ? "•" : _data["lyrics"][i]["line"];
              html += "</div>"
            }
            $(".lyrics").html(html);
            align();
          }
        })
      })
  }

  render(){
    return (
      <div className="pbody">

        <div className="content">
          <div className="lyrics"></div>
        </div>

        <div className="player">
          <div className="left"></div>
          <div className="right">
            <div className="top">
              <a className="song">Enter Sandman</a>
              <a className="artist">Metallica</a>
            </div>
            <div className="bottom">
              <video controls={""} autoPlay={"true"} name={"media"}>
                <source src="http://localhost:3000/musics/enter-sandman.mp3" type="audio/mpeg"></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    )
  }
}