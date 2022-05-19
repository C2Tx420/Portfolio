import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fashion-button',
  templateUrl: './fashion-button.component.html',
  styleUrls: ['./fashion-button.component.scss']
})
export class FashionButtonComponent implements OnInit {

  @Input() size : string = 's';

  @Input() content : string = 'Shop Now';

  @Input() color : string = 'white'

  constructor() { }

  ngOnInit(): void {
  }

}
