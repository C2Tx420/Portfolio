import { Component, OnInit } from '@angular/core'
import { CursorService } from 'src/app/service/active-cursor.service';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit {

  constructor(
    private cursorSerivce: CursorService
  ) {}

  ngOnInit(): void {
    this.cursorSerivce.active();
  }
}
