(() => {
  const container = document.getElementById('laptop-scene');
  if (!container || typeof THREE === 'undefined') return;

  container.innerHTML = '<div id="laptop-fx" class="laptop-stage__fx"></div>';

  const fxHost = document.getElementById('laptop-fx');

  // Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf7f8fc);
  scene.fog = new THREE.FogExp2(0xf7f8fc, 0.18);

  // Camera
  const camera = new THREE.PerspectiveCamera(20, 1, 0.1, 20);
  camera.position.set(0, 0.15, 3.2);

  const baseZ = 2.2;

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  fxHost.appendChild(renderer.domElement);

  // Stage
  const stage = new THREE.Group();
  scene.add(stage);

  // Background
  const bg = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 12),
    new THREE.MeshStandardMaterial({
      color: 0xf7f8fc,
      roughness: 1,
      metalness: 0
    })
  );
  bg.position.z = -5;
  stage.add(bg);

  // Shadow
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(2.2, 64),
    new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.08
    })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -1.35;
  shadow.scale.set(1.8, 1, 1);
  stage.add(shadow);

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.8));

  const key = new THREE.DirectionalLight(0xffffff, 1.2);
  key.position.set(2, 3, 4);
  scene.add(key);

  const rim = new THREE.DirectionalLight(0x7c3aed, 0.35);
  rim.position.set(-3, 1, 3);
  scene.add(rim);

  const fill = new THREE.DirectionalLight(0xe85a71, 0.25);
  fill.position.set(0, -2, 3);
  scene.add(fill);

  // Texture
  const loader = new THREE.TextureLoader();
  const texture = loader.load('assets/laptop.png', () => {
    texture.colorSpace = THREE.SRGBColorSpace;
  });

  // Laptop frame
  const frame = new THREE.Mesh(
    new THREE.PlaneGeometry(5.6, 4.1),
    new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.35,
      metalness: 0.1
    })
  );
  stage.add(frame);

  // Screen
  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(5.25, 3.85),
    new THREE.MeshBasicMaterial({ map: texture })
  );
  screen.position.z = 0.02;
  stage.add(screen);

  // Gloss
  const gloss = new THREE.Mesh(
    new THREE.PlaneGeometry(5.25, 3.85),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.04
    })
  );
  gloss.position.set(-0.03, 0.12, 0.03);
  stage.add(gloss);

  // Ring
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(2.4, 0.015, 16, 120),
    new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.08
    })
  );
  ring.position.set(0, -0.3, -1.2);
  ring.rotation.x = Math.PI / 2;
  stage.add(ring);

  // Resize
  function resize() {
    const r = fxHost.getBoundingClientRect();
    const w = Math.max(r.width, 320);
    const h = Math.max(r.height, 320);

    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  window.addEventListener('resize', resize);
  resize();

  // Smooth breathing zoom only
  const clock = new THREE.Clock();

  function animate() {
    const t = clock.getElapsedTime();
    camera.position.z = baseZ + Math.sin(t * 0.35) * 0.22;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
})();