import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import {gsap} from  'gsap'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  ngOnInit(): void {
    this.loadingAnimation()
  }

  loadingAnimation(){
    anime.timeline().add({
      targets: '.text-logo',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 5000,
      delay: function(el:any, i:number) { return i * 1000 },
      direction: 'alternate',
    })

    const tl = gsap.timeline()
    tl
      .to('.text-logo ',{opacity:0,duration:.5,delay:2},1)
      .to('.loading',{height:0,duration:1,delay:2},1)
  }

}
