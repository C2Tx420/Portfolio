import {Component, Input, OnInit} from '@angular/core';
import {gsap} from 'gsap';

@Component({
  selector: 'app-horizontal-text',
  templateUrl: './horizontal-text.component.html',
  styleUrls: ['./horizontal-text.component.scss']
})
export class HorizontalTextComponent implements OnInit {

  @Input() content : string | undefined;

  @Input() page : string | undefined;

  ngOnInit(): void {
    this.textAnimation()
  }

  textAnimation() {
    const target: any = document.querySelector('h1');

    target.innerHTML = ` ${this.content} - ${this.content} - ${this.content} - ${this.content} - ${this.content} - ${this.content}`;

    const tl = gsap.timeline();
      tl.to(target,{duration: 20, x: '3000px', ease: "none", repeat: -1 });

    target.addEventListener('mouseenter',()=>{
      tl.timeScale(0.5)
      gsap.to('.wrapper',{background:'white'})
    })

    target.addEventListener('mouseleave',()=>{
      tl.timeScale(1)
      gsap.to('.wrapper',{background:'black'})
    })

  }
}
