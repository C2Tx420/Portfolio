import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {gsap}  from 'gsap';
import anime from 'animejs'
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title) {}

  public checkOutForm !: FormGroup;

  ngOnInit(): void {
    this.titleService.setTitle('Check Out')
    this.animate();
    this.buildForm();
  }

  animate() {
      const timeline = gsap.timeline()
      const heading : any = document.querySelector('.heading__main-text h1')
      heading.innerHTML = heading.textContent.replace(
        /\S/g,
        "<span style='display: inline-block' class='letter'>$&</span>"
      );

      anime.timeline().add({
        targets: ".heading__main-text h1 .letter",
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 2000,
        delay: anime.stagger(200),
      });

      timeline
        .from('.finger',{duration:1,y:50,opacity:0,delay:.1},1)
        .from('.back-btn',{duration:1,y:50,opacity:0,delay:.1},1)
        .from('.right-col',{duration:1,y:50,opacity:0},2)
        .from('.price',{duration:1,y:50,opacity:0, delay:.1},2)
  }

  public buildForm() {
    this.checkOutForm = new FormGroup(
      {
        cardNumber: new FormControl('',   Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[0-9]{6,32}$/i),
        ])),
        date: new FormControl('',Validators.required),
        cvv: new FormControl('',Validators.required)
      }
    );
  }

  checkOutSubmit() {
    console.log(this.checkOutForm.value)
    console.log(this.checkOutForm.valid)
  }

}
