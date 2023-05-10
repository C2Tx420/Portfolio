import { Component, OnInit } from '@angular/core';
import { CursorService } from 'src/app/service/active-cursor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cursorService: CursorService) { }

  ngOnInit(): void {
    this.cursorService.active();
  }

}
