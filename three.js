var scene, camera, renderer, cube;
 
function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 640 / 480, 0.1, 1000);
 
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(640, 480);
  document.body.appendChild(renderer.domElement);
 
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({ color: 0x93CCEA });
  cube = new THREE.Mesh(geometry, material);
 
  cube.position.x = 0;
  cube.material.transparent = true;
 
  scene.add(cube);
 
  camera.position.z = 5;
  camera.position.y = 1;
 
  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  createjs.Ticker.addEventListener("tick", animate);
 
  cube.material.opacity = 0;
 
  createjs.Tween.get(cube.material, { loop: true }).to({ opacity: 1 }, 500).wait(1500).to({ opacity: 0 }, 500);
  createjs.Tween.get(cube.rotation, { loop: true }).wait(500).to({ y: Math.PI*2 }, 1500, createjs.Ease.getPowInOut(3)).wait(500);
}
 
function animate() {
  renderer.render(scene, camera);
}