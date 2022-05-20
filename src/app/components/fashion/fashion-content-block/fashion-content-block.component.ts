import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fashion-content-block',
  templateUrl: './fashion-content-block.component.html',
  styleUrls: ['./fashion-content-block.component.scss']
})
export class FashionContentBlockComponent implements OnInit {

  @Input() mainText : string = 'Main Text';

  @Input() subText ?: string;

  @Input() subBText ?: string;

  @Input() subText2 ?: string;

  @Input() style : string = 'banner';

  @Input() img ?: string;

  @Input() btnSize : string = 's';

  @Input() color: string = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
