import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-change',
  templateUrl: './status-change.component.html',
  styleUrls: ['./status-change.component.css']
})
export class StatusChangeComponent implements OnInit {
  activated: number = 0;
  disactivated: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
