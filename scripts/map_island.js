import fs from 'fs';
import path from 'path';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

global.self = global;
global.window = global;

const filePath = path.resolve('public/models/Low poly floating islands.glb');
const data = fs.readFileSync(filePath);
const arrayBuffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);

const loader = new GLTFLoader();
loader.parse(arrayBuffer, '', (gltf) => {
  const islandGroup = gltf.scene;
  const scale = 0.01;
  const islandPos = new THREE.Vector3(5.04, 0, -4.20);
  
  islandGroup.scale.set(scale, scale, scale);
  islandGroup.position.copy(islandPos);
  islandGroup.updateMatrixWorld(true);
  
  const raycaster = new THREE.Raycaster();
  
  // Test a grid of (x, z) coordinates to find surface heights
  const pointsToTest = [
    { name: 'Center', x: 0, z: 0 },
    { name: 'Front-Left', x: -2.5, z: 1.5 },
    { name: 'Front-Right', x: 2.5, z: 1.5 },
    { name: 'Front-Center', x: 0, z: 2.5 },
    { name: 'Mid-Left', x: -3.5, z: -0.5 },
    { name: 'Mid-Right', x: 3.2, z: -0.5 },
    { name: 'Back-Left', x: -2.2, z: -2.8 },
    { name: 'Back-Right', x: 2.0, z: -2.5 },
    { name: 'Back-Center', x: 0, z: -3.2 },
    { name: 'Plateau-A', x: -1.5, z: 0.8 },
    { name: 'Plateau-B', x: 1.2, z: 0.5 },
    { name: 'Plateau-C', x: 0.2, z: -1.0 },
    { name: 'Plateau-D', x: -1.0, z: -1.8 },
    { name: 'Plateau-E', x: 2.2, z: 2.2 },
  ];
  
  console.log('\n--- Raycasting on Island Surface ---');
  for (const pt of pointsToTest) {
    const origin = new THREE.Vector3(pt.x, 15, pt.z);
    const direction = new THREE.Vector3(0, -1, 0);
    raycaster.set(origin, direction);
    
    const intersects = raycaster.intersectObjects(islandGroup.children, true);
    if (intersects.length > 0) {
      const topHit = intersects[0];
      console.log(`Point "${pt.name}" [x: ${pt.x.toFixed(2)}, z: ${pt.z.toFixed(2)}] => Ground Y = ${topHit.point.y.toFixed(3)}`);
    } else {
      console.log(`Point "${pt.name}" [x: ${pt.x.toFixed(2)}, z: ${pt.z.toFixed(2)}] => No ground hit (in air/gap)`);
    }
  }
});
