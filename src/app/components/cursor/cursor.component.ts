import { Component, OnInit } from '@angular/core';
import {gsap} from "gsap";

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit {

  ngOnInit(): void {
    this.activeCursor();
  }

  activeCursor() {
    gsap.set('.cursor',{xPercent:-50,yPercent:-50})

    window.addEventListener('mousemove',e => {
      gsap.to('.cursor',{x:e.clientX,y:e.clientY, duration: 0.1});
    });

    const targetHover = document.querySelectorAll('.hv');

    targetHover.forEach((item:any )=>{
      item.addEventListener('mouseenter',() =>{
        gsap.to('.cursor',{scale:4, duration: 0.3})
      });
      item.addEventListener('mouseleave',() =>{
        gsap.to('.cursor',{scale:1, duration: 0.3})
      });
    });
  }
}
