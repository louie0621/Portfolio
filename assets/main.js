// ---------- Header scroll state ----------
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ---------- Scroll reveal ----------
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // ---------- 3D Hero: layered "full stack" scene ----------
  (function initHero3D(){
    const canvas = document.getElementById('hero-canvas');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(0, 1.4, 9);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    function resize(){
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();

    // lights
    scene.add(new THREE.AmbientLight(0x334155, 1.2));
    const key = new THREE.PointLight(0x06B6D4, 2.4, 30);
    key.position.set(4, 5, 6);
    scene.add(key);
    const fill = new THREE.PointLight(0x2563EB, 1.6, 30);
    fill.position.set(-5, -2, 4);
    scene.add(fill);
    const rim = new THREE.PointLight(0x10B981, 1.2, 30);
    rim.position.set(0, -4, -4);
    scene.add(rim);

    // ---- Stack: three floating layers = Frontend / Backend / Database ----
    const stackGroup = new THREE.Group();
    scene.add(stackGroup);

    const layerColors = [0x06B6D4, 0x2563EB, 0x10B981];
    const layerY = [1.6, 0, -1.6];
    const layers = [];

    layerColors.forEach((color, i) => {
      const geo = new THREE.IcosahedronGeometry(1.15, 0);
      const mat = new THREE.MeshStandardMaterial({
        color: color,
        metalness: 0.35,
        roughness: 0.25,
        transparent: true,
        opacity: 0.88,
        flatShading: true
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(2.4, layerY[i], 0);
      mesh.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, 0);
      stackGroup.add(mesh);

      const wireGeo = new THREE.IcosahedronGeometry(1.3, 0);
      const wireMat = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.18 });
      const wire = new THREE.Mesh(wireGeo, wireMat);
      wire.position.copy(mesh.position);
      stackGroup.add(wire);

      layers.push({ mesh, wire, speed: 0.15 + i*0.05, floatOffset: i*2 });
    });

    // connecting vertical line through the stack
    const lineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(2.4, 2.6, 0),
      new THREE.Vector3(2.4, -2.6, 0)
    ]);
    const lineMat = new THREE.LineDashedMaterial({ color: 0x64748B, dashSize: 0.15, gapSize: 0.12, transparent: true, opacity: 0.4 });
    const connector = new THREE.Line(lineGeo, lineMat);
    connector.computeLineDistances();
    stackGroup.add(connector);

    // ---- ambient particle field ----
    const particleCount = 220;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++){
      positions[i*3] = (Math.random() - 0.5) * 18;
      positions[i*3+1] = (Math.random() - 0.5) * 12;
      positions[i*3+2] = (Math.random() - 0.5) * 10 - 2;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({ color: 0x8fb8ff, size: 0.035, transparent: true, opacity: 0.5 });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // mouse parallax
    let targetX = 0, targetY = 0;
    window.addEventListener('mousemove', (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 0.6;
      targetY = (e.clientY / window.innerHeight - 0.5) * 0.4;
    }, { passive: true });

    const clock = new THREE.Clock();

    function animate(){
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      layers.forEach((l, i) => {
        l.mesh.rotation.x += 0.0016 + l.speed*0.001;
        l.mesh.rotation.y += 0.0022;
        l.wire.rotation.x = l.mesh.rotation.x;
        l.wire.rotation.y = l.mesh.rotation.y;
        const floatY = Math.sin(t*0.6 + l.floatOffset) * 0.12;
        l.mesh.position.y = layerY[i] + floatY;
        l.wire.position.y = l.mesh.position.y;
      });

      particles.rotation.y += 0.0004;

      stackGroup.rotation.y += (targetX*0.5 - stackGroup.rotation.y) * 0.02;
      camera.position.y += (1.4 + targetY*0.6 - camera.position.y) * 0.02;
      camera.lookAt(1.2, 0, 0);

      renderer.render(scene, camera);
    }

    if (!reduceMotion) {
      animate();
    } else {
      renderer.render(scene, camera);
    }

    window.addEventListener('resize', resize, { passive: true });
  })();