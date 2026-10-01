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
  const island = gltf.scene;
  const box = new THREE.Box3().setFromObject(island);
  const center = new THREE.Vector3();
  box.getCenter(center);
  
  const scale = 0.01;
  const offset = new THREE.Vector3(5.044, 0.018, -4.203);
  
  console.log('--- Inspecting all meshes in island model ---');
  island.traverse((child) => {
    if (child.isMesh) {
      const mbox = new THREE.Box3().setFromObject(child);
      const minW = new THREE.Vector3(
        (mbox.min.x) * scale + offset.x,
        (mbox.min.y) * scale + offset.y,
        (mbox.min.z) * scale + offset.z
      );
      const maxW = new THREE.Vector3(
        (mbox.max.x) * scale + offset.x,
        (mbox.max.y) * scale + offset.y,
        (mbox.max.z) * scale + offset.z
      );
      console.log(`Mesh: ${child.name}`);
      console.log(`  World X: [${minW.x.toFixed(2)}, ${maxW.x.toFixed(2)}]`);
      console.log(`  World Y: [${minW.y.toFixed(2)}, ${maxW.y.toFixed(2)}]`);
      console.log(`  World Z: [${minW.z.toFixed(2)}, ${maxW.z.toFixed(2)}]`);
    }
  });
});
