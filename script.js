(() => {
  const container = document.getElementById('laptop-scene');
  if (!container || typeof THREE === 'undefined') return;

  container.innerHTML = '<div id="laptop-fx" class="laptop-stage__fx"></div>';

  const fxHost = document.getElementById('laptop-fx');
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0, 6.2);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0xffffff, 0);
  fxHost.appendChild(renderer.domElement);

  const group = new THREE.Group();
  scene.add(group);

  const ambient = new THREE.AmbientLight(0xffffff, 1.25);
  scene.add(ambient);

  const fill = new THREE.DirectionalLight(0xe85a71, 0.55);
  fill.position.set(2, 3, 4);
  scene.add(fill);

  const rim = new THREE.DirectionalLight(0x7c3aed, 0.45);
  rim.position.set(-2, 2, 4);
  scene.add(rim);

  const loader = new THREE.TextureLoader();
  const texture = loader.load('assets/laptop.png', () => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
  });

  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5.2, 3.86),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true })
  );
  group.add(plane);

  const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0x7c3aed,
    transparent: true,
    opacity: 0.12,
    depthWrite: false,
  });

  const glowOrb = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), glowMaterial);
  glowOrb.position.set(-1.55, 0.75, -0.8);
  group.add(glowOrb);

  const glowOrb2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.45, 24, 24),
    new THREE.MeshBasicMaterial({
      color: 0xe85a71,
      transparent: true,
      opacity: 0.1,
      depthWrite: false,
    })
  );
  glowOrb2.position.set(1.35, -0.65, -0.6);
  group.add(glowOrb2);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(2.15, 0.03, 10, 90),
    new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
    })
  );
  ring.position.set(0, -0.55, -0.9);
  group.add(ring);

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(1.45, 0.02, 10, 90),
    new THREE.MeshBasicMaterial({
      color: 0xe85a71,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
    })
  );
  ring2.position.set(0.55, 0.45, -0.7);
  ring2.rotation.x = Math.PI / 2;
  group.add(ring2);

  const overlay = new THREE.Mesh(
    new THREE.PlaneGeometry(5.2, 3.86),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.02,
    })
  );
  overlay.position.z = 0.001;
  group.add(overlay);

  function resize() {
    const rect = fxHost.getBoundingClientRect();
    const width = Math.max(rect.width, 320);
    const height = Math.max(rect.height, 320);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  window.addEventListener('resize', resize);
  resize();

  const clock = new THREE.Clock();
  function animate() {
    const t = clock.getElapsedTime();

    group.rotation.z = Math.sin(t * 0.35) * 0.035;
    group.rotation.y = Math.sin(t * 0.28) * 0.08;
    group.rotation.x = Math.sin(t * 0.22) * 0.03;
    group.position.y = Math.sin(t * 0.65) * 0.06;
    group.scale.setScalar(1 + Math.sin(t * 0.35) * 0.008);
    glowOrb.position.y = 0.75 + Math.sin(t * 0.9) * 0.08;
    glowOrb.position.x = -1.55 + Math.sin(t * 0.7) * 0.06;
    glowOrb2.position.y = -0.65 + Math.cos(t * 0.85) * 0.06;
    ring.rotation.z = t * 0.12;
    ring2.rotation.z = -t * 0.15;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
})();
