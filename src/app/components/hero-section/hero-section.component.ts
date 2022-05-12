import { Component, OnInit } from '@angular/core';
import {
  BoxBufferGeometry,
  CircleGeometry,
  Clock,
  Color,
  Mesh,
  MeshBasicMaterial, MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderCube();
  }

  renderCube() {
    const scene = new Scene();

    const threeContainer: any = document.querySelector('.hero__right');

    scene.background = new Color('#0E0E0E')

    const fov = 75;
    const aspect = threeContainer.clientWidth / threeContainer.clientHeight;
    const near = 0.1;
    const far = 1000;

    const camera = new PerspectiveCamera(fov, aspect, near, far);

    camera.position.set(0, 0, 5);

    const geometry = new BoxBufferGeometry(2, 4, 2);

    const material = new MeshBasicMaterial({color:'#fff'});

    const cube = new Mesh(geometry, material);

    scene.add(cube);


    const renderer = new WebGLRenderer();

    renderer.setSize(threeContainer.clientWidth, threeContainer.clientHeight);

    renderer.setPixelRatio(window.devicePixelRatio);

    threeContainer.append(renderer.domElement);

    renderer.render(scene, camera);

    const clock = new Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()


      cube.rotation.y = .5 * elapsedTime

      renderer.render(scene, camera)

      window.requestAnimationFrame(animate)
    }

    animate()
  }


}
