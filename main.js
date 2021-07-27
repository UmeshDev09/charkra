import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

const renderer = new THREE.WebGLRenderer({

    canvas: document.querySelector('#bg'),

});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);


renderer.render(scene, camera);



const geometry = new THREE.RingGeometry(10, 3, 36);
const material = new THREE.MeshBasicMaterial({ color: 0xfff456, wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

renderer.render(scene, camera);

function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.005;
    mesh.rotation.z += 0.01;





    renderer.render(scene, camera);
}

animate();