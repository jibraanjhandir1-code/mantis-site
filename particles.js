(function(){
  const cvs = document.getElementById('circuitCanvas');
  if(!cvs) return;
  const ctx = cvs.getContext('2d');
  let W, H, particles = [];
  const COUNT = 180;
  const SPEED_MIN = .2, SPEED_MAX = .8;
  const TRAIL_LEN = 28;
  const TURN_CHANCE = .012;
  const DIRS = [[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[-.707,.707],[.707,-.707],[-.707,-.707]];

  function resize(){
    W = cvs.width = window.innerWidth;
    H = cvs.height = window.innerHeight;
    initParticles();
  }
  function randDir(){ return DIRS[Math.floor(Math.random() * DIRS.length)]; }
  function initParticles(){
    particles = [];
    for(let i = 0; i < COUNT; i++){
      const d = randDir();
      const spd = SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN);
      const x = Math.random() * W, y = Math.random() * H;
      particles.push({
        x, y, dx: d[0]*spd, dy: d[1]*spd,
        trail: [{x, y}],
        size: Math.random() > .9 ? 2 : 1,
        alpha: .06 + Math.random() * .12
      });
    }
  }
  function draw(){
    ctx.fillStyle = 'rgba(0,0,0,.12)';
    ctx.fillRect(0, 0, W, H);
    for(const p of particles){
      p.x += p.dx; p.y += p.dy;
      if(Math.random() < TURN_CHANCE){
        const d = randDir();
        const spd = Math.hypot(p.dx, p.dy);
        p.dx = d[0]*spd; p.dy = d[1]*spd;
      }
      if(p.x < 0) p.x = W; if(p.x > W) p.x = 0;
      if(p.y < 0) p.y = H; if(p.y > H) p.y = 0;
      p.trail.push({x: p.x, y: p.y});
      if(p.trail.length > TRAIL_LEN) p.trail.shift();
      if(p.trail.length > 1){
        for(let i = 1; i < p.trail.length; i++){
          const prev = p.trail[i-1], cur = p.trail[i];
          if(Math.abs(cur.x - prev.x) > W/2 || Math.abs(cur.y - prev.y) > H/2) continue;
          const t = i / p.trail.length;
          ctx.strokeStyle = `rgba(160,160,160,${t * p.alpha})`;
          ctx.lineWidth = p.size * t;
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(cur.x, cur.y);
          ctx.stroke();
        }
      }
      ctx.fillStyle = `rgba(160,160,160,${p.alpha + .08})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  resize();
  draw();
  window.addEventListener('resize', resize);
})();
