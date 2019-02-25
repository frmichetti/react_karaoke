function demoAnimation() {
  var targetElements = [].slice.call(document.getElementsByClassName('wgh-slider-target'));
  var targetInputMode = targetElements[0].nodeName.toLowerCase() === 'input' && targetElements[0].type === 'radio';
  var targetIds = targetElements.map(function (element) {return element.getAttribute('id');});
  var targetIndex = 0;

  var triggerElements = [].slice.call(document.getElementsByClassName('wgh-slider-item__trigger'));
  var timeoutId = void 0;

  function changeSlide() {
    triggerElements[++targetIndex].click();
    if (targetIndex < Math.floor(targetElements.length / 2)) setTimeout(changeSlide, 1200);
  }

  changeSlide();
}

if (document.location.pathname.indexOf('fullcpgrid') > -1) {
  demoAnimation();
}

if (document.getElementsByClassName('wgh-slider-target')[0].nodeName.toLowerCase() !== 'input') {
  var resetBtn = document.createElement('button');
  resetBtn.type = 'button';
  resetBtn.textContent = 'Reset Hash URL';

  resetBtn.onclick = function () {
    document.location.hash = '';
  };

  document.body.insertBefore(resetBtn, document.body.firstChild);
}