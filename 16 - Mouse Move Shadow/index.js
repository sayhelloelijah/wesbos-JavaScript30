const hero = document.querySelector('.hero');
  const text = hero.querySelector('h1');
  const walk = 100;
  function shadow(e) {
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;
    if(this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / width * walk) - (walk / 2));
    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 10px rgba(138, 255, 60, 0.5),
      ${xWalk * -1}px ${yWalk}px 10px rgba(255, 178, 100, 0.9),
      ${yWalk}px ${xWalk}px 10px rgba(76, 200, 100, 200.75),
      ${yWalk * -1}px ${xWalk}px 10px rgba(150, 199, 255, 0.6)
    `;
  }
  hero.addEventListener('mousemove', shadow);