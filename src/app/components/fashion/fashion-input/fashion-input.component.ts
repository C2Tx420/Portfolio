import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fashion-input',
  templateUrl: './fashion-input.component.html',
  styleUrls: ['./fashion-input.component.scss']
})
export class FashionInputComponent implements OnInit {

  @Input () type: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
