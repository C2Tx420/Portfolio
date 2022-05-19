import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fashion-content-block',
  templateUrl: './fashion-content-block.component.html',
  styleUrls: ['./fashion-content-block.component.scss']
})
export class FashionContentBlockComponent implements OnInit {

  @Input() mainText : string = 'Main Text';

  @Input() subText ?: string;

  @Input() style : string = '1';

  @Input() img ?: string;

  @Input() btnSize : string = 's';

  @Input() btnColor: string = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
