import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fashion-ads-card',
  templateUrl: './fashion-ads-card.component.html',
  styleUrls: ['./fashion-ads-card.component.scss']
})
export class FashionAdsCardComponent implements OnInit {

  @Input() img: string = '';

  @Input() color: string = '';

  @Input() bg ?: string;

  @Input() size: string = 's';

  constructor() { }

  ngOnInit(): void {
  }

}
