import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/services/counter/counter.service';

@Component({
  selector: 'app-status-change',
  templateUrl: './status-change.component.html',
  styleUrls: ['./status-change.component.css']
})
export class StatusChangeComponent implements OnInit {
  activated: number;
  disactivated: number;

  constructor( private counterService: CounterService) {
    this.counterService.emitacivated.subscribe( (activeCount: number) => {this.activated = activeCount});
    this.counterService.emitdisactivated.subscribe( (inactiveCount: number) => {this.disactivated = inactiveCount});
  }

  ngOnInit(): void {
    this.activated = 0;
    this.disactivated = 0;
  }

}
