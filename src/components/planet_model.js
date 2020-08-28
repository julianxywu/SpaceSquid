import React, { Component } from 'react';
import * as THREE from 'three';
import OBJLoader from 'three-obj-loader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class PlanetModel extends Component {
  componentDidMount() {
    this.renderPlanet();
  }

  //   componentDidUpdate(prevProps) {
  //     // if (this.props.location.pathname !== prevProps.location.pathname) {
  //     this.renderPlanet();
  //     // }
  //   }

  renderPlanet = () => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      15,
      window.innerWidth / window.innerHeight,
      2,
      5000,
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
    this.mount.appendChild(renderer.domElement);

    renderer.setClearColor(0x000000, 0);

    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0xffffff, 1, 100);
    light1.position.set(2, 0, 0);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xffffff, 1, 100);
    light2.position.set(-2, 0, 0);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xffffff, 1, 100);
    light3.position.set(0, -2, 0);
    scene.add(light3);

    const light4 = new THREE.PointLight(0xffffff, 1, 100);
    light4.position.set(0, 2, 0);
    scene.add(light4);

    const light5 = new THREE.PointLight(0xffffff, 1, 100);
    light5.position.set(0, 0, 2);
    scene.add(light5);

    const light6 = new THREE.PointLight(0xffffff, 1, 100);
    light6.position.set(0, 0, -2);
    scene.add(light6);

    // eslint-disable-next-line new-cap
    // ThreeOrbitControls(THREE);

    const controls = new OrbitControls(camera, this.mount);

    // controls.addEventListener('change', renderer);

    function animate() {
      controls.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    const name = this.props.planetName.toLowerCase();
    // eslint-disable-next-line new-cap
    OBJLoader(THREE);
    const loader = new THREE.OBJLoader();
    loader.load(`../../models/${name}/sphereModel.obj`, (obj) => {
      const texture = new THREE.TextureLoader();
      texture.load(`../../models/${name}/${name}Texture.jpg`, (tex) => {
        const material = new THREE.MeshPhongMaterial({ map: tex });
        obj.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            // eslint-disable-next-line no-param-reassign
            child.material = material;
          }
        });
        scene.add(obj.children[0]);
        animate();
      });
    });
    if (name === 'saturn') {
      loader.load(`../../models/${name}/saturnRingModel.obj`, (obj) => {
        const texture = new THREE.TextureLoader();
        texture.load(`../../models/${name}/saturnRingTexture.png`, (tex) => {
          const material = new THREE.MeshPhongMaterial({ map: tex });
          obj.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              // eslint-disable-next-line no-param-reassign
              child.material = material;
            }
          });
          scene.add(obj.children[0]);
          animate();
        });
      });
    }
  }

  render() {
    return (
      <>
        <div className="planet-model-text">
          Drag me!
        </div>
        <div className="planet-model-container" ref={(ref) => { this.mount = ref; }} />

      </>
    );
  }
}

export default PlanetModel;
