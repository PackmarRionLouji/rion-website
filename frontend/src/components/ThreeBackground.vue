<template>
  <div ref="container" class="three-container"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import * as THREE from 'three';

const container = ref(null);
let scene, camera, renderer, points;
let animationId;

onMounted(() => {
  initThree();
  animate();
  window.addEventListener('resize', onWindowResize);
  window.addEventListener('mousemove', onMouseMove);
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener('resize', onWindowResize);
  window.removeEventListener('mousemove', onMouseMove);
  if (renderer) renderer.dispose();
});

const initThree = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.value.appendChild(renderer.domElement);

  // Geometry
  const particlesCount = window.innerWidth < 768 ? 500 : 1500;
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 12;
    // Set colors (hints of orange and blue)
    if (i % 3 === 0) {
      const isOrange = Math.random() > 0.5;
      colors[i] = isOrange ? 0.95 : 0.2; // R
      colors[i+1] = isOrange ? 0.6 : 0.5; // G
      colors[i+2] = isOrange ? 0.1 : 0.95; // B
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Material
  const material = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true
  });

  points = new THREE.Points(geometry, material);
  scene.add(points);
};

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

let mouseX = 0, mouseY = 0;
const onMouseMove = (event) => {
  mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
};

const animate = () => {
  animationId = requestAnimationFrame(animate);

  points.rotation.y += 0.0015;
  points.rotation.x += 0.0008;

  // Gentle follow mouse
  points.position.x += (mouseX * 0.5 - points.position.x) * 0.05;
  points.position.y += (-mouseY * 0.5 - points.position.y) * 0.05;

  renderer.render(scene, camera);
};
</script>

<style scoped>
.three-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2; /* Behind everything */
  pointer-events: none;
  background: transparent;
}
</style>
