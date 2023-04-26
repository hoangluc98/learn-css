let zoom = document.querySelector('.zoom');
let imgZoom = document.getElementById('imgZoom');

zoom.addEventListener('mousemove', (event) => {
  imgZoom.style.opacity = 1;

  let positionPx = event.x - zoom.getBoundingClientRect().left;
  let positionX = (positionPx / zoom.offsetWidth) * 100;
  imgZoom.style.setProperty('--zoom-x', positionX + '%');

  let positionPy = event.y - zoom.getBoundingClientRect().top;
  let positionY = (positionPy / zoom.offsetWidth) * 100;
  imgZoom.style.setProperty('--zoom-y', positionY + '%');

  let transformX = -(positionX - 50) / 3;
  let transformY = -(positionY - 50) / 3;
  imgZoom.style.transform = `scale(1.5) translateX(${transformX}%) translateY(${transformY}%)`;
});

zoom.addEventListener('mouseout', (event) => {
  imgZoom.style.opacity = 0;
});
