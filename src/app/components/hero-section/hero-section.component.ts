import { Component, OnInit } from '@angular/core';
import {
  AmbientLight,
  Color, DirectionalLight,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(this.initThree,2000)
  }

  initThree() {
    const scene = new Scene();

    const threeContainer: any = document.querySelector('.hero__right');

    scene.background = new Color('#0E0E0E')

    const fov = 50;
    const aspect = threeContainer.clientWidth / threeContainer.clientHeight;
    const near = 0.1;
    const far = 1000;

    const camera = new PerspectiveCamera(fov, aspect, near, far);

    camera.position.set(3 , 0.5, 0);

    camera.rotation.set(0, 90, 0)

    //ambient light
    const light = new AmbientLight( 0xFFFAFAFA );

    scene.add( light );

    const directionLight = new DirectionalLight(0xFFFFB74D, 0.5)

    directionLight.position.set(-20,12,4)

    scene.add(directionLight);

    // scene.add(cube);

    const loader = new GLTFLoader()

    loader.load(
      'assets/model/scene.glb',
      function (gltf) {

        scene.add(gltf.scene)

        animate()
      }, undefined, function ( error ) {

        console.error( error );

      }
    );


    const renderer = new WebGLRenderer();

    renderer.setSize(threeContainer.clientWidth, threeContainer.clientHeight);

    renderer.setPixelRatio(window.devicePixelRatio);

    threeContainer.append(renderer.domElement);

    renderer.render(scene, camera);

    const orbitControls = new OrbitControls(camera, renderer.domElement);

    orbitControls.autoRotate = true;

    const animate = () => {
      orbitControls.update();

      renderer.render( scene, camera );

      requestAnimationFrame( animate );
    }
  }


}
