import * as THREE from 'three'

export function initLaptopScene() {
  const container = document.getElementById('laptop-scene')
  if (!container || typeof THREE === 'undefined') return () => {}

  container.innerHTML = '<div id="laptop-fx" class="laptop-stage__fx"></div>'

  const fxHost = document.getElementById('laptop-fx')
  if (!fxHost) return () => {}

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffffff)

  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 20)
  camera.position.set(0, 0, 8.8)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0xffffff, 0)
  fxHost.appendChild(renderer.domElement)

  const stage = new THREE.Group()
  scene.add(stage)

  const backdrop = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 7),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
    })
  )
  backdrop.position.z = -2.3
  stage.add(backdrop)

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(1.9, 64),
    new THREE.MeshBasicMaterial({
      color: 0x111827,
      transparent: true,
      opacity: 0.07,
      depthWrite: false,
    })
  )
  shadow.scale.set(1.65, 0.52, 1)
  shadow.position.set(0, -1.38, -1.1)
  stage.add(shadow)

  const ambient = new THREE.AmbientLight(0xffffff, 1.25)
  scene.add(ambient)

  const fill = new THREE.DirectionalLight(0xe85a71, 0.35)
  fill.position.set(2.5, 2.5, 5)
  scene.add(fill)

  const rim = new THREE.DirectionalLight(0x7c3aed, 0.28)
  rim.position.set(-2, 1.2, 4.5)
  scene.add(rim)

  const topLight = new THREE.DirectionalLight(0xffffff, 0.5)
  topLight.position.set(0, 4, 3)
  scene.add(topLight)

  const loader = new THREE.TextureLoader()
  const texture = loader.load('/developer.png', () => {
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy()
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
  })

  const frame = new THREE.Mesh(
    new THREE.PlaneGeometry(5.55, 4.12),
    new THREE.MeshBasicMaterial({
      color: 0xf8fafc,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
    })
  )
  stage.add(frame)

  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5.2, 3.86),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true })
  )
  plane.position.z = 0.02
  stage.add(plane)

  const highlight = new THREE.Mesh(
    new THREE.PlaneGeometry(5.05, 3.65),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.06,
      depthWrite: false,
    })
  )
  highlight.position.set(-0.03, 0.16, 0.03)
  stage.add(highlight)

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(2.35, 0.02, 10, 100),
    new THREE.MeshBasicMaterial({
      color: 0xe85a71,
      transparent: true,
      opacity: 0.08,
      depthWrite: false,
    })
  )
  ring.position.set(0, -0.2, -1.05)
  ring.rotation.x = Math.PI / 2
  stage.add(ring)

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(1.6, 0.018, 10, 100),
    new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.07,
      depthWrite: false,
    })
  )
  ring2.position.set(0.85, 0.62, -0.85)
  ring2.rotation.x = Math.PI / 2
  stage.add(ring2)

  function resize() {
    const rect = fxHost.getBoundingClientRect()
    const width = Math.max(rect.width, 320)
    const height = Math.max(rect.height, 320)
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }

  window.addEventListener('resize', resize)
  resize()

  const clock = new THREE.Clock()
  let frameId = 0

  function animate() {
    const t = clock.getElapsedTime()
    camera.position.z = 8.8 + Math.sin(t * 0.35) * 0.22

    renderer.render(scene, camera)
    frameId = requestAnimationFrame(animate)
  }

  animate()

  return () => {
    cancelAnimationFrame(frameId)
    window.removeEventListener('resize', resize)
    renderer.dispose()
    container.innerHTML = ''
  }
}
